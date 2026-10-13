/**
 * VeeduX Future Backend Architecture & Type Definitions
 * 
 * Ready for REST/GraphQL/Supabase/Firebase integration.
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique UUID
 * @property {string} name - Full Name
 * @property {string} phone - Mobile / WhatsApp Number
 * @property {string} email - Email Address
 * @property {'buyer' | 'owner' | 'agent' | 'builder' | 'admin'} role - Role
 * @property {string} [avatar] - Profile picture URL
 * @property {boolean} isVerified - Mobile & KYC verified status
 * @property {string} createdAt - ISO Timestamp
 */

/**
 * @typedef {Object} Property
 * @property {string} id - Unique Property ID (e.g. VX-101)
 * @property {string} title - Property Title
 * @property {string} malayalamTitle - Malayalam Title (optional for localized display)
 * @property {string} description - Comprehensive property description
 * @property {'sell' | 'rent'} purpose - Listing Type
 * @property {'land-plots' | 'houses' | 'villas' | 'apartments' | 'flats' | 'commercial' | 'shops' | 'offices' | 'rentals'} propertyType - Specific property type
 * @property {number} price - Numeric price in INR
 * @property {string} priceDisplay - Formatted display price (e.g. "₹85 Lakhs", "₹25,000 / mo")
 * @property {string} priceUnit - "Total Amount" | "Per Cent" | "Per Month"
 * @property {string} district - Kerala District (e.g. "Ernakulam")
 * @property {string} location - Locality / City (e.g. "Kakkanad, Kochi")
 * @property {number} [landAreaCents] - Land area in Cents (Kerala standard)
 * @property {number} [builtUpSqFt] - Built-up area in Square Feet
 * @property {number} [bedrooms] - BHK count (0 for plots/commercial)
 * @property {number} [bathrooms] - Bathrooms count
 * @property {'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished'} [furnishedStatus]
 * @property {'Covered' | 'Open' | 'None'} [parking]
 * @property {string} [facing] - Compass orientation (East, North, etc.)
 * @property {string} [waterSource] - Water availability (e.g. "Open Well + KWA")
 * @property {string[]} images - Image URLs array
 * @property {string} [videoUrl] - Virtual tour / walkthrough video URL
 * @property {string[]} amenities - Array of amenities (e.g. "Gated Community", "Well Water")
 * @property {string[]} highlights - Bullet points for key features
 * @property {boolean} isVerified - Verified by VeeduX ground team
 * @property {boolean} isFeatured - Promoted listing
 * @property {boolean} isDirectOwner - Direct owner listing without broker
 * @property {'pending' | 'approved' | 'rejected'} approvalStatus - Admin moderation state
 * @property {Seller} seller - Listing owner / agent details
 * @property {string} createdAt - ISO Timestamp
 */

/**
 * @typedef {Object} Seller
 * @property {string} id - Seller UUID
 * @property {string} name - Seller Full Name
 * @property {'Direct Owner' | 'NRI Owner' | 'Certified Agent' | 'Builder'} type
 * @property {string} phone - Contact phone
 * @property {string} whatsapp - WhatsApp number (international format)
 * @property {string} memberSince - Membership badge text
 * @property {string} [avatar] - Seller avatar URL
 */

/**
 * @typedef {Object} Enquiry
 * @property {string} id - Enquiry UUID
 * @property {string} propertyId - Related Property ID
 * @property {string} buyerName - Name of enquirer
 * @property {string} buyerPhone - Phone of enquirer
 * @property {string} message - Message or visit timing
 * @property {'visit_request' | 'price_negotiation' | 'general'} type
 * @property {string} createdAt - ISO Timestamp
 */

/**
 * @typedef {Object} Report
 * @property {string} id - Report UUID
 * @property {string} propertyId - Flagged Property ID
 * @property {string} reason - Reason for report
 * @property {string} reportedBy - User phone or name
 * @property {'investigating' | 'resolved' | 'dismissed'} status
 * @property {string} createdAt - ISO Timestamp
 */

export const BACKEND_CONFIG = {
  version: "1.0.0",
  apiBaseUrl: process.env.VITE_API_URL || "https://api.veedux.com/v1",
  endpoints: {
    properties: "/properties",
    locations: "/locations",
    auth: "/auth",
    enquiries: "/enquiries",
    reports: "/reports",
    admin: "/admin",
  },
};
