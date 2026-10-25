import { supabase, isSupabaseConfigured } from './supabase';

/**
 * VeeduX Supabase Integration Service
 * 
 * Provides unified, type-safe API methods for:
 * - Real Authentication (Phone OTP, Email/Password, Sessions)
 * - Property Listings Fetching, Publishing & Moderation
 * - Image Uploads with Directory Isolation (<userId>/...)
 * - Enquiries, Bookmarks, Reports & Activity Notifications
 *
 * Designed with a strict graceful fallback: if Supabase is unconfigured or a query
 * fails, operations return graceful error/null states so the application's mock
 * demo mode continues working uninterrupted.
 */

/**
 * Helper to compute human-friendly relative date
 */
export function formatRelativeTime(dateInput) {
  if (!dateInput) return 'Recent';
  try {
    const date = new Date(dateInput);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 30) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  } catch {
    return 'Recent';
  }
}

/**
 * Converts a Supabase PostgreSQL row into the frontend property format expected
 * by VeeduX components (PropertyCard, PropertyDetailPage, etc.)
 */
export function transformPropertyRow(row) {
  if (!row) return null;

  // Sorted image URLs
  const rawImages = Array.isArray(row.property_images) ? row.property_images : [];
  const images = rawImages
    .slice()
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
    .map((img) => img.image_url)
    .filter(Boolean);

  const fallbackImages = ['/images/kochi-nri-villa.jpg'];

  const numericPrice = Number(row.price) || 0;
  const formattedPrice =
    row.price_display ||
    (numericPrice > 0
      ? numericPrice >= 10000000
        ? `₹ ${(numericPrice / 10000000).toFixed(2)} Cr`
        : `₹ ${(numericPrice / 100000).toFixed(0)} Lakhs`
      : 'Price on Request');

  return {
    id: row.id,
    title: row.title || 'Kerala Property',
    malayalamTitle: row.malayalam_title || '',
    description: row.description || '',
    purpose: row.purpose || 'sell',
    propertyType: row.property_type || 'houses',
    categoryName: row.category_name || 'Houses & Villas',
    price: formattedPrice,
    priceNumber: numericPrice,
    priceUnit: row.price_unit || 'Total Amount',
    district: row.district || 'Kerala',
    city: row.city || '',
    location: row.location || `${row.city || ''}, ${row.district || ''}`.replace(/^,\s*/, ''),
    locality: row.locality || '',
    bedrooms: Number(row.bedrooms) || 0,
    bathrooms: Number(row.bathrooms) || 0,
    builtUpArea: row.built_up_sqft ? `${Number(row.built_up_sqft).toLocaleString('en-IN')} sq.ft` : null,
    builtUpSqFt: row.built_up_sqft ? Number(row.built_up_sqft) : null,
    landArea: row.land_area_cents ? `${row.land_area_cents} Cents` : null,
    landAreaCents: row.land_area_cents ? Number(row.land_area_cents) : null,
    facing: row.facing || 'East Facing',
    furnishing: row.furnished_status || 'Semi-Furnished',
    parking: row.parking || 'Covered',
    waterSource: row.water_source || 'Kerala Open Well + KWA Pipeline',
    yearBuilt: row.year_built || '',
    reraApproved: Boolean(row.rera_approved),
    directOwner: Boolean(row.is_direct_owner),
    featured: Boolean(row.is_featured),
    verified: Boolean(row.is_verified),
    badge: row.is_verified ? 'VeeduX Verified' : row.is_featured ? 'Featured' : null,
    videoUrl: row.video_url || '',
    amenities: Array.isArray(row.amenities) ? row.amenities : [],
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
    approvalStatus: row.approval_status || row.status || 'approved',
    postedAgo: formatRelativeTime(row.created_at),
    createdAt: row.created_at,
    images: images.length > 0 ? images : fallbackImages,
    seller: {
      id: row.seller_id,
      name: row.contact_name || row.seller_profile?.full_name || 'Property Owner',
      type: row.is_direct_owner
        ? 'Direct Owner'
        : row.seller_profile?.role === 'agent'
        ? 'Certified Agent'
        : 'Owner / Agent',
      phone: row.contact_phone || '+91 98470 00000',
      whatsapp: (row.contact_whatsapp || row.contact_phone || '9847000000').replace(/[^0-9]/g, ''),
      memberSince: row.seller_profile?.member_since || 'VeeduX Member',
      avatar:
        row.seller_profile?.avatar_url ||
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isVerified: Boolean(row.seller_profile?.is_verified),
    },
  };
}

// ============================================================================
// 1. PROPERTY LISTINGS API
// ============================================================================

/**
 * Fetches properties from Supabase.
 * - If includeAll is true (e.g. for admin), fetches pending, approved, and rejected.
 * - Otherwise fetches only approved properties.
 */
export async function fetchPropertiesFromSupabase({ includeAll = false } = {}) {
  if (!isSupabaseConfigured || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  try {
    let query = supabase
      .from('properties')
      .select('*, property_images(*)')
      .order('created_at', { ascending: false });

    if (!includeAll) {
      query = query.eq('approval_status', 'approved');
    }

    const { data, error } = await query;
    if (error) {
      console.warn('[VeeduX Supabase] fetchProperties warning:', error.message);
      return { data: null, error };
    }

    const transformed = (data || []).map(transformPropertyRow);
    return { data: transformed, error: null };
  } catch (err) {
    console.error('[VeeduX Supabase] fetchProperties exception:', err);
    return { data: null, error: err };
  }
}

/**
 * Uploads an array of image files to the Supabase Storage 'property-images' bucket.
 * Enforces folder isolation: images are uploaded under `<userId>/<timestamp>_<filename>`
 */
export async function uploadPropertyImagesToStorage(imageFiles, userId) {
  if (!isSupabaseConfigured || !supabase) {
    return { urls: [], error: new Error('Supabase not configured') };
  }

  if (!userId) {
    return { urls: [], error: new Error('User authentication required for image uploads') };
  }

  const uploadedUrls = [];

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i];
    if (!(file instanceof File)) {
      // If it's already a string URL (e.g. sample image), keep it
      if (typeof file === 'string') uploadedUrls.push(file);
      continue;
    }

    // Sanitize file name
    const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const storagePath = `${userId}/${Date.now()}_${i}_${cleanName}`;

    try {
      const { data, error: uploadErr } = await supabase.storage
        .from('property-images')
        .upload(storagePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadErr) {
        console.warn(`[VeeduX Storage] Failed to upload ${file.name}:`, uploadErr.message);
        continue;
      }

      const { data: urlData } = supabase.storage
        .from('property-images')
        .getPublicUrl(data.path);

      if (urlData?.publicUrl) {
        uploadedUrls.push(urlData.publicUrl);
      }
    } catch (err) {
      console.error(`[VeeduX Storage] Exception uploading ${file.name}:`, err);
    }
  }

  return { urls: uploadedUrls, error: null };
}

/**
 * Creates a new property listing in Supabase with pending approval status.
 */
export async function createPropertyInSupabase(propertyFormData, imageFiles = [], user) {
  if (!isSupabaseConfigured || !supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  if (!user?.id) {
    return { data: null, error: new Error('Please sign in before posting a property.') };
  }

  try {
    // 1. Upload any file-based images to Storage
    let finalPhotoUrls = [];
    if (imageFiles && imageFiles.length > 0) {
      const { urls } = await uploadPropertyImagesToStorage(imageFiles, user.id);
      finalPhotoUrls = urls;
    }

    // If no real images uploaded, fallback to any string URLs from form or default
    if (finalPhotoUrls.length === 0) {
      const existingUrls = (propertyFormData.photos || []).filter((p) => typeof p === 'string');
      finalPhotoUrls = existingUrls.length > 0 ? existingUrls : ['/images/kochi-nri-villa.jpg'];
    }

    // 2. Prepare database payload
    const payload = {
      seller_id: user.id,
      title: propertyFormData.title || 'Kerala Property',
      malayalam_title: propertyFormData.malayalamTitle || null,
      description: propertyFormData.description || '',
      purpose: propertyFormData.purpose || 'sell',
      property_type: propertyFormData.propertyType || 'houses',
      category_name: propertyFormData.categoryName || 'Houses & Villas',
      price: Number(propertyFormData.priceNumber) || 0,
      price_display: propertyFormData.price || '₹ Price on Request',
      price_unit: propertyFormData.priceUnit || 'Total Amount',
      district: propertyFormData.district || 'Ernakulam',
      city: propertyFormData.city || 'Kochi',
      location: propertyFormData.location || `${propertyFormData.city || ''}, ${propertyFormData.district || ''}`,
      locality: propertyFormData.locality || null,
      land_area_cents: propertyFormData.landAreaCents ? Number(propertyFormData.landAreaCents) : null,
      built_up_sqft: propertyFormData.builtUpSqFt ? Number(propertyFormData.builtUpSqFt) : null,
      bedrooms: Number(propertyFormData.bedrooms) || 0,
      bathrooms: Number(propertyFormData.bathrooms) || 0,
      furnished_status: propertyFormData.furnishing || 'Semi-Furnished',
      parking: propertyFormData.parking || null,
      facing: propertyFormData.facing || null,
      water_source: propertyFormData.waterSource || null,
      rera_approved: Boolean(propertyFormData.reraApproved),
      is_direct_owner: propertyFormData.sellerType === 'Direct Owner',
      video_url: propertyFormData.videoUrl || null,
      contact_name: propertyFormData.sellerName || user.name || 'Owner',
      contact_phone: propertyFormData.sellerPhone || user.phone || '+91 98470 00000',
      contact_whatsapp: (propertyFormData.sellerWhatsapp || propertyFormData.sellerPhone || '').replace(/[^0-9]/g, ''),
      approval_status: user.role === 'admin' ? 'approved' : 'pending',
    };

    const { data: insertedProperty, error: insertErr } = await supabase
      .from('properties')
      .insert(payload)
      .select()
      .single();

    if (insertErr) {
      console.error('[VeeduX Supabase] Insert property failed:', insertErr);
      return { data: null, error: insertErr };
    }

    // 3. Insert images into property_images
    if (insertedProperty && finalPhotoUrls.length > 0) {
      const imageRecords = finalPhotoUrls.map((url, idx) => ({
        property_id: insertedProperty.id,
        image_url: url,
        is_featured: idx === 0,
        display_order: idx,
      }));

      const { error: imgErr } = await supabase.from('property_images').insert(imageRecords);
      if (imgErr) {
        console.warn('[VeeduX Supabase] Warning inserting property_images:', imgErr.message);
      }
    }

    // Return transformed property
    const transformed = transformPropertyRow({
      ...insertedProperty,
      property_images: finalPhotoUrls.map((url, i) => ({ image_url: url, display_order: i })),
    });

    return { data: transformed, error: null };
  } catch (err) {
    console.error('[VeeduX Supabase] createProperty exception:', err);
    return { data: null, error: err };
  }
}

/**
 * Checks whether an ID string is a valid UUID
 */
export const isUuid = (id) =>
  typeof id === 'string' &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

/**
 * Updates a property's moderation status (Admin only).
 * Handles live Supabase database rows as well as local mock/demo listings cleanly.
 */
export async function updatePropertyApprovalInSupabase(propertyId, status) {
  if (!propertyId) {
    return { success: false, data: null, error: new Error('Missing propertyId parameter') };
  }

  // Handle mock / local demo property IDs without invalid UUID database syntax error
  if (!isUuid(propertyId)) {
    console.info(
      `[VeeduX Admin] Updating local/mock demo listing (${propertyId}) to status: "${status}".`
    );
    return {
      success: true,
      data: [{ id: propertyId, approval_status: status }],
      error: null,
      isMock: true,
    };
  }

  if (!isSupabaseConfigured || !supabase) {
    return {
      success: true,
      data: [{ id: propertyId, approval_status: status }],
      error: null,
      isMock: true,
    };
  }

  try {
    console.log(
      `[VeeduX Supabase] Updating live database listing (${propertyId}) to approval_status: "${status}"...`
    );

    // Primary attempt: update 'approval_status' and 'is_verified'
    let { data, error } = await supabase
      .from('properties')
      .update({
        approval_status: status,
        is_verified: status === 'approved',
      })
      .eq('id', propertyId)
      .select();

    // Fallback if database table uses 'status' instead of 'approval_status'
    if (error && (error.code === '42703' || error.message?.toLowerCase().includes('approval_status'))) {
      console.warn(
        '[VeeduX Supabase] approval_status column missing in schema, attempting status column fallback...'
      );
      const fallback = await supabase
        .from('properties')
        .update({
          status: status,
          is_verified: status === 'approved',
        })
        .eq('id', propertyId)
        .select();
      data = fallback.data;
      error = fallback.error;
    }

    if (error) {
      console.error('[VeeduX Supabase] Database update error on property approval:', {
        propertyId,
        status,
        code: error.code,
        message: error.message,
        details: error.details,
      });
      return { success: false, data: null, error };
    }

    // Verify Row Level Security (RLS) didn't silently reject the update
    if (!data || data.length === 0) {
      const rlsMsg =
        'Supabase update returned 0 modified rows. Row Level Security (RLS) requires an authenticated administrator session in public.profiles to modify live listings.';
      console.warn('[VeeduX Supabase] RLS policy restriction:', rlsMsg);
      return {
        success: false,
        data: null,
        error: new Error(rlsMsg),
        isRlsRestricted: true,
      };
    }

    console.info('[VeeduX Supabase] Property approval updated successfully in database:', {
      propertyId,
      status,
      rows: data,
    });
    return { success: true, data, error: null };
  } catch (err) {
    console.error('[VeeduX Supabase] updatePropertyApproval exception:', err);
    return { success: false, data: null, error: err };
  }
}

// ============================================================================
// 2. BOOKMARKS API
// ============================================================================

export async function fetchUserBookmarksFromSupabase(userId) {
  if (!isSupabaseConfigured || !supabase || !userId) return { data: [], error: null };

  try {
    const { data, error } = await supabase
      .from('bookmarks')
      .select('property_id')
      .eq('user_id', userId);

    if (error) return { data: [], error };
    return { data: (data || []).map((b) => b.property_id), error: null };
  } catch (err) {
    return { data: [], error: err };
  }
}

export async function toggleBookmarkInSupabase(userId, propertyId, currentlySaved) {
  if (!isSupabaseConfigured || !supabase || !userId) return { success: false };

  try {
    if (currentlySaved) {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('user_id', userId)
        .eq('property_id', propertyId);
      return { success: !error, error };
    } else {
      const { error } = await supabase
        .from('bookmarks')
        .insert({ user_id: userId, property_id: propertyId });
      return { success: !error, error };
    }
  } catch (err) {
    return { success: false, error: err };
  }
}

// ============================================================================
// 3. ENQUIRIES API
// ============================================================================

export async function submitEnquiryToSupabase({
  propertyId,
  buyerId,
  buyerName,
  buyerPhone,
  message,
  enquiryType = 'general',
}) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: true, isMock: true };
  }

  try {
    const payload = {
      property_id: propertyId,
      buyer_id: buyerId || null,
      buyer_name: buyerName,
      buyer_phone: buyerPhone,
      message,
      enquiry_type: enquiryType,
      status: 'new',
    };

    const { data, error } = await supabase.from('enquiries').insert(payload).select().single();
    if (error) {
      console.warn('[VeeduX Supabase] submitEnquiry warning:', error.message);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error('[VeeduX Supabase] submitEnquiry exception:', err);
    return { success: false, error: err };
  }
}

export async function fetchUserEnquiriesFromSupabase(userId) {
  if (!isSupabaseConfigured || !supabase || !userId) return { data: [], error: null };

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*, properties(title)')
      .order('created_at', { ascending: false });

    if (error) return { data: [], error };

    const transformed = (data || []).map((e) => ({
      id: e.id,
      propertyId: e.property_id,
      propertyTitle: e.properties?.title || 'Kerala Property',
      buyerName: e.buyer_name,
      buyerPhone: e.buyer_phone,
      message: e.message,
      date: formatRelativeTime(e.created_at),
      status: e.status,
    }));

    return { data: transformed, error: null };
  } catch (err) {
    return { data: [], error: err };
  }
}

// ============================================================================
// 4. REPORTS API
// ============================================================================

export async function submitReportToSupabase({ propertyId, reporterId, reportedBy, reason }) {
  if (!isSupabaseConfigured || !supabase) return { success: true, isMock: true };

  try {
    const payload = {
      property_id: propertyId,
      reporter_id: reporterId || null,
      reported_by: reportedBy || 'Kerala User',
      reason,
      status: 'investigating',
    };

    const { data, error } = await supabase.from('reports').insert(payload).select().single();
    return { success: !error, data, error };
  } catch (err) {
    return { success: false, error: err };
  }
}

export async function fetchReportsFromSupabase() {
  if (!isSupabaseConfigured || !supabase) return { data: [], error: null };

  try {
    const { data, error } = await supabase
      .from('reports')
      .select('*, properties(title)')
      .order('created_at', { ascending: false });

    if (error) return { data: [], error };

    const transformed = (data || []).map((r) => ({
      id: r.id,
      propertyId: r.property_id,
      propertyTitle: r.properties?.title || 'Flagged Property',
      reason: r.reason,
      reportedBy: r.reported_by,
      date: formatRelativeTime(r.created_at),
      status: r.status,
    }));

    return { data: transformed, error: null };
  } catch (err) {
    return { data: [], error: err };
  }
}

// ============================================================================
// 5. NOTIFICATIONS API
// ============================================================================

export async function fetchNotificationsFromSupabase(userId) {
  if (!isSupabaseConfigured || !supabase || !userId) return { data: [], error: null };

  try {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) return { data: [], error };

    const transformed = (data || []).map((n) => ({
      id: n.id,
      title: n.title,
      message: n.message,
      time: formatRelativeTime(n.created_at),
      read: Boolean(n.is_read),
      linkUrl: n.link_url,
    }));

    return { data: transformed, error: null };
  } catch (err) {
    return { data: [], error: err };
  }
}

export async function markNotificationReadInSupabase(notificationId) {
  if (!isSupabaseConfigured || !supabase) return { error: null };
  return supabase.from('notifications').update({ is_read: true }).eq('id', notificationId);
}

// ============================================================================
// 6. AUTHENTICATION & USER PROFILE API
// ============================================================================

/**
 * Fetch authoritative user profile from public.profiles
 */
export async function getUserProfile(userId) {
  if (!isSupabaseConfigured || !supabase || !userId) return { profile: null };

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.warn('[VeeduX Supabase] Profile read warning:', error.message);
      return { profile: null, error };
    }

    return { profile: data, error: null };
  } catch (err) {
    return { profile: null, error: err };
  }
}

/**
 * Upsert or initialize profile upon user login/signup
 */
export async function syncUserProfile(authUser, additionalData = {}) {
  if (!isSupabaseConfigured || !supabase || !authUser?.id) return null;

  try {
    const profilePayload = {
      id: authUser.id,
      full_name:
        additionalData.fullName ||
        authUser.user_metadata?.full_name ||
        authUser.user_metadata?.name ||
        'VeeduX Member',
      email: authUser.email || null,
      phone: additionalData.phone || authUser.phone || authUser.user_metadata?.phone || null,
      role: additionalData.role || authUser.user_metadata?.role || 'buyer',
      avatar_url:
        additionalData.avatarUrl ||
        authUser.user_metadata?.avatar_url ||
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    };

    const { data, error } = await supabase
      .from('profiles')
      .upsert(profilePayload)
      .select()
      .maybeSingle();

    if (error) {
      console.warn('[VeeduX Supabase] Profile sync warning:', error.message);
      return profilePayload;
    }

    return data || profilePayload;
  } catch (err) {
    console.error('[VeeduX Supabase] syncUserProfile exception:', err);
    return null;
  }
}

/**
 * Normalize phone number to standard E.164 format (+91XXXXXXXXXX)
 */
export function normalizePhoneNumber(phoneInput) {
  if (!phoneInput) return '';
  // Strip all non-digit and non-plus characters
  const cleaned = phoneInput.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) {
    return cleaned;
  }
  // Strip any leading zeroes
  const withoutZeroes = cleaned.replace(/^0+/, '');
  // Default country code for VeeduX Kerala Real Estate is +91 (India)
  return `+91${withoutZeroes}`;
}

/**
 * Sign in via phone OTP (SMS / WhatsApp)
 */
export async function signInWithPhoneOtp(phoneNumber) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: new Error('Supabase is not configured.') };
  }

  try {
    const formattedPhone = normalizePhoneNumber(phoneNumber);
    const digitsOnly = formattedPhone.replace(/^\+/, '');
    if (digitsOnly.length < 10) {
      return {
        success: false,
        error: new Error('Please enter a valid 10-digit mobile number.'),
      };
    }

    console.info('[VeeduX Supabase] Requesting phone OTP for:', formattedPhone);
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: formattedPhone,
    });

    if (error) {
      console.warn('[VeeduX Supabase] signInWithOtp error:', error.message, error.code);
      return { success: false, data, error, code: error.code };
    }

    return { success: true, data, error: null, formattedPhone };
  } catch (err) {
    console.error('[VeeduX Supabase] signInWithPhoneOtp exception:', err);
    return { success: false, error: err };
  }
}

/**
 * Verify phone OTP
 */
export async function verifyPhoneOtp(phoneNumber, token) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: new Error('Supabase is not configured.') };
  }

  try {
    const formattedPhone = normalizePhoneNumber(phoneNumber);
    const cleanToken = token?.trim();

    if (!cleanToken || cleanToken.length < 6) {
      return {
        success: false,
        error: new Error('Please enter a complete 6-digit verification code.'),
      };
    }

    console.info('[VeeduX Supabase] Verifying OTP for:', formattedPhone);
    const { data, error } = await supabase.auth.verifyOtp({
      phone: formattedPhone,
      token: cleanToken,
      type: 'sms',
    });

    if (error) {
      console.warn('[VeeduX Supabase] verifyOtp error:', error.message, error.code);
      return { success: false, data, error, code: error.code };
    }

    if (data?.user) {
      await syncUserProfile(data.user, { phone: formattedPhone });
    }

    return { success: true, data, error: null };
  } catch (err) {
    console.error('[VeeduX Supabase] verifyPhoneOtp exception:', err);
    return { success: false, error: err };
  }
}

/**
 * Sign in with Email and Password
 */
export async function signInWithEmailPassword(email, password) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: new Error('Supabase is not configured.') };
  }

  try {
    const trimmedEmail = email?.trim()?.toLowerCase() || '';
    console.info('[VeeduX Supabase] Signing in with email:', trimmedEmail);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password,
    });

    if (error) {
      console.warn('[VeeduX Supabase] signInWithPassword error:', error.message);
      return { success: false, data, error };
    }

    if (data?.user) {
      await syncUserProfile(data.user);
    }

    return { success: true, data, error: null };
  } catch (err) {
    console.error('[VeeduX Supabase] signInWithEmailPassword exception:', err);
    return { success: false, error: err };
  }
}

/**
 * Sign up with Email and Password
 */
export async function signUpWithEmailPassword(email, password, { fullName, phone, role = 'buyer' } = {}) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: new Error('Supabase is not configured.') };
  }

  try {
    const trimmedEmail = email?.trim()?.toLowerCase() || '';
    const cleanPhone = phone ? normalizePhoneNumber(phone) : null;
    console.info('[VeeduX Supabase] Signing up new user with email:', trimmedEmail);

    const redirectUrl =
      typeof window !== 'undefined' && window.location.origin
        ? `${window.location.origin}`
        : 'http://localhost:5173';

    const { data, error } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName?.trim() || 'VeeduX Member',
          phone: cleanPhone,
          role: role || 'buyer',
        },
      },
    });

    if (error) {
      console.warn('[VeeduX Supabase] signUpWithEmailPassword error:', error.message);
      return { success: false, data, error };
    }

    // Detect duplicate email if Supabase returns empty identities array
    if (data?.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
      return {
        success: false,
        data,
        error: new Error('An account with this email address already exists. Please log in instead.'),
      };
    }

    // Check if session was created immediately or confirmation email was sent
    const needsEmailConfirmation = Boolean(data?.user && !data?.session);

    // If session is active immediately, sync user profile
    if (data?.session && data?.user) {
      await syncUserProfile(data.user, {
        fullName: fullName?.trim(),
        phone: cleanPhone,
        role: role || 'buyer',
      });
    }

    return {
      success: true,
      data,
      needsEmailConfirmation,
      error: null,
    };
  } catch (err) {
    console.error('[VeeduX Supabase] signUpWithEmailPassword exception:', err);
    return { success: false, error: err };
  }
}

/**
 * Sign out current user from Supabase Auth
 */
export async function signOutFromSupabase() {
  if (!isSupabaseConfigured || !supabase) {
    console.info('[VeeduX Supabase] Supabase not configured, local sign out only.');
    return { success: true, error: null };
  }
  try {
    console.info('[VeeduX Supabase] Calling supabase.auth.signOut()...');
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('[VeeduX Supabase] supabase.auth.signOut error:', error.message);
      return { success: false, error };
    }
    console.info('[VeeduX Supabase] Supabase auth signOut succeeded.');
    return { success: true, error: null };
  } catch (err) {
    console.error('[VeeduX Supabase] Unexpected exception in signOutFromSupabase:', err);
    return { success: false, error: err };
  }
}

