-- ==============================================================================
-- VeeduX Kerala Property Marketplace: Complete Production Migration
-- Target Platform: Supabase PostgreSQL (Full Schema, Hardened RLS & Storage)
-- ==============================================================================

-- 1. Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ==============================================================================
-- 2. Helper Functions & Security Definitions
-- ==============================================================================

-- Trigger function to auto-update 'updated_at' timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

-- Security Definer function to check if the current user has 'admin' role.
-- Strictly queries the authoritative public.profiles table server-side.
-- Does NOT trust client-editable user_metadata or raw JWT claims.
create or replace function public.is_admin()
returns boolean
language plpgsql
security definer
set search_path = public, auth, pg_temp
stable
as $$
declare
  _is_admin boolean;
begin
  -- Service role key execution bypasses user checks
  if (auth.jwt() ->> 'role') = 'service_role' then
    return true;
  end if;

  if auth.uid() is null then
    return false;
  end if;

  select (role = 'admin') into _is_admin
  from public.profiles
  where id = auth.uid();

  return coalesce(_is_admin, false);
end;
$$;

-- ==============================================================================
-- 3. PROFILES TABLE (Linked with auth.users)
-- ==============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  email text,
  role text not null default 'buyer' check (role in ('buyer', 'owner', 'agent', 'builder', 'admin')),
  avatar_url text,
  is_verified boolean not null default false,
  member_since text default 'Member since 2024',
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- Trigger to auto-create profile upon auth.users sign-up
-- SECURITY: Strictly prevents users from self-assigning 'admin' role via signup metadata
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
declare
  _assigned_role text;
begin
  -- Only allow non-admin roles from client metadata; defaults to 'buyer'
  if new.raw_user_meta_data->>'role' in ('owner', 'agent', 'builder') then
    _assigned_role := new.raw_user_meta_data->>'role';
  else
    _assigned_role := 'buyer';
  end if;

  insert into public.profiles (id, full_name, email, phone, role, avatar_url, is_verified)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', 'VeeduX Member'),
    new.email,
    coalesce(new.raw_user_meta_data->>'phone', new.phone, null),
    _assigned_role,
    coalesce(new.raw_user_meta_data->>'avatar_url', null),
    false -- Never allow self-verification on signup
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Trigger to prevent privilege escalation on profiles
create or replace function public.protect_profile_fields()
returns trigger
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
begin
  -- Prevent privilege escalation: only existing admins can alter 'role' or 'is_verified'
  if not public.is_admin() then
    if new.role is distinct from old.role then
      raise exception 'Unauthorized: Only administrators can modify user roles.';
    end if;
    if new.is_verified is distinct from old.is_verified then
      raise exception 'Unauthorized: Only administrators can modify verification status.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_protect_profile_fields on public.profiles;
create trigger trg_protect_profile_fields
  before update on public.profiles
  for each row execute procedure public.protect_profile_fields();

-- Updated_at trigger for profiles
drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

-- ==============================================================================
-- 4. PROPERTIES TABLE
-- ==============================================================================
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  malayalam_title text,
  description text not null,
  purpose text not null check (purpose in ('sell', 'rent')),
  property_type text not null check (
    property_type in (
      'land-plots',
      'houses',
      'villas',
      'apartments',
      'flats',
      'commercial',
      'shops',
      'offices',
      'rentals'
    )
  ),
  category_name text not null,
  price numeric not null check (price >= 0),
  price_display text not null,
  price_unit text not null default 'Total Amount',
  district text not null,
  city text not null,
  location text not null,
  locality text,
  land_area_cents numeric check (land_area_cents is null or land_area_cents >= 0),
  built_up_sqft numeric check (built_up_sqft is null or built_up_sqft >= 0),
  bedrooms integer default 0 check (bedrooms >= 0),
  bathrooms integer default 0 check (bathrooms >= 0),
  furnished_status text check (furnished_status in ('Unfurnished', 'Semi-Furnished', 'Fully Furnished')),
  parking text,
  facing text,
  water_source text,
  year_built text,
  rera_approved boolean default false,
  is_direct_owner boolean default false,
  is_featured boolean default false,
  is_verified boolean default false,
  video_url text,
  contact_name text,
  contact_phone text,
  contact_whatsapp text,
  amenities text[] default '{}',
  highlights text[] default '{}',
  approval_status text not null default 'pending' check (approval_status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- Idempotent column additions for existing deployments
alter table if exists public.properties add column if not exists contact_name text;
alter table if exists public.properties add column if not exists contact_phone text;
alter table if exists public.properties add column if not exists contact_whatsapp text;

-- Trigger: Enforces business logic and security on property insert
create or replace function public.handle_property_insert()
returns trigger
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
begin
  if not public.is_admin() then
    new.approval_status := 'pending';
    new.is_verified := false;
    new.is_featured := false;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_handle_property_insert on public.properties;
create trigger trg_handle_property_insert
  before insert on public.properties
  for each row execute procedure public.handle_property_insert();

-- Trigger: Enforces business logic for property updates.
-- Owners can update pending, rejected, and approved listings.
-- Editing an approved listing's core details automatically resets approval_status to 'pending'.
-- Owners are strictly prevented from self-approving, verifying, or featuring their listings.
create or replace function public.protect_property_fields()
returns trigger
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
begin
  -- Prevent transferring property ownership to another user
  if new.seller_id is distinct from old.seller_id and not public.is_admin() then
    raise exception 'Unauthorized: Cannot transfer listing ownership to another seller.';
  end if;

  if not public.is_admin() then
    -- Non-admins cannot set approval_status to 'approved'
    if new.approval_status = 'approved' and old.approval_status is distinct from 'approved' then
      raise exception 'Unauthorized: Only administrators can approve properties.';
    end if;

    -- Non-admins cannot alter verification or featured promotion
    new.is_verified := old.is_verified;
    new.is_featured := old.is_featured;

    -- If a seller modifies ANY critical listing fields on an approved property, reset to pending for re-moderation
    if old.approval_status = 'approved' and (
      new.title is distinct from old.title or
      new.description is distinct from old.description or
      new.purpose is distinct from old.purpose or
      new.property_type is distinct from old.property_type or
      new.category_name is distinct from old.category_name or
      new.price is distinct from old.price or
      new.price_display is distinct from old.price_display or
      new.price_unit is distinct from old.price_unit or
      new.district is distinct from old.district or
      new.city is distinct from old.city or
      new.location is distinct from old.location or
      new.locality is distinct from old.locality or
      new.land_area_cents is distinct from old.land_area_cents or
      new.built_up_sqft is distinct from old.built_up_sqft or
      new.bedrooms is distinct from old.bedrooms or
      new.bathrooms is distinct from old.bathrooms or
      new.furnished_status is distinct from old.furnished_status or
      new.parking is distinct from old.parking or
      new.facing is distinct from old.facing or
      new.water_source is distinct from old.water_source or
      new.year_built is distinct from old.year_built or
      new.rera_approved is distinct from old.rera_approved or
      new.is_direct_owner is distinct from old.is_direct_owner or
      new.amenities is distinct from old.amenities or
      new.highlights is distinct from old.highlights or
      new.video_url is distinct from old.video_url or
      new.contact_name is distinct from old.contact_name or
      new.contact_phone is distinct from old.contact_phone or
      new.contact_whatsapp is distinct from old.contact_whatsapp
    ) then
      new.approval_status := 'pending';
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_protect_property_fields on public.properties;
create trigger trg_protect_property_fields
  before update on public.properties
  for each row execute procedure public.protect_property_fields();

-- Updated_at trigger for properties
drop trigger if exists properties_updated_at on public.properties;
create trigger properties_updated_at
  before update on public.properties
  for each row execute procedure public.handle_updated_at();

-- ==============================================================================
-- 5. PROPERTY IMAGES TABLE
-- ==============================================================================
create table if not exists public.property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  image_url text not null,
  is_featured boolean not null default false,
  display_order integer not null default 0,
  created_at timestamptz not null default timezone('utc'::text, now())
);

-- ==============================================================================
-- 6. BOOKMARKS TABLE
-- ==============================================================================
create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  property_id uuid not null references public.properties(id) on delete cascade,
  created_at timestamptz not null default timezone('utc'::text, now()),
  constraint unique_user_property_bookmark unique (user_id, property_id)
);

-- ==============================================================================
-- 7. ENQUIRIES TABLE
-- ==============================================================================
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  buyer_id uuid references public.profiles(id) on delete set null,
  buyer_name text not null,
  buyer_phone text not null,
  message text not null,
  enquiry_type text not null default 'general' check (enquiry_type in ('visit_request', 'price_negotiation', 'general')),
  status text not null default 'new' check (status in ('new', 'read', 'contacted', 'closed')),
  created_at timestamptz not null default timezone('utc'::text, now())
);

-- Trigger: Ensures sellers can ONLY update the enquiry status and cannot tamper with any other enquiry field
create or replace function public.protect_enquiry_fields()
returns trigger
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
begin
  if not public.is_admin() then
    if new.id is distinct from old.id or
       new.property_id is distinct from old.property_id or
       new.buyer_id is distinct from old.buyer_id or
       new.buyer_name is distinct from old.buyer_name or
       new.buyer_phone is distinct from old.buyer_phone or
       new.message is distinct from old.message or
       new.enquiry_type is distinct from old.enquiry_type or
       new.created_at is distinct from old.created_at then
      raise exception 'Unauthorized: Only enquiry status may be updated by the property owner.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_protect_enquiry_fields on public.enquiries;
create trigger trg_protect_enquiry_fields
  before update on public.enquiries
  for each row execute procedure public.protect_enquiry_fields();

-- ==============================================================================
-- 8. REPORTS TABLE
-- ==============================================================================
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  reporter_id uuid references public.profiles(id) on delete set null,
  reported_by text not null,
  reason text not null,
  status text not null default 'investigating' check (status in ('investigating', 'resolved', 'dismissed')),
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- Updated_at trigger for reports
drop trigger if exists reports_updated_at on public.reports;
create trigger reports_updated_at
  before update on public.reports
  for each row execute procedure public.handle_updated_at();

-- ==============================================================================
-- 9. NOTIFICATIONS TABLE
-- ==============================================================================
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  message text not null,
  link_url text,
  is_read boolean not null default false,
  created_at timestamptz not null default timezone('utc'::text, now())
);

-- Trigger: Ensures users can only update the is_read status on notifications
create or replace function public.protect_notification_fields()
returns trigger
language plpgsql
security definer
set search_path = public, auth, pg_temp
as $$
begin
  if not public.is_admin() then
    new.id := old.id;
    new.user_id := old.user_id;
    new.title := old.title;
    new.message := old.message;
    new.link_url := old.link_url;
    new.created_at := old.created_at;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_protect_notification_fields on public.notifications;
create trigger trg_protect_notification_fields
  before update on public.notifications
  for each row execute procedure public.protect_notification_fields();

-- ==============================================================================
-- 10. PUBLIC SELLER PROFILE VIEW (Privacy Protection)
-- Strips private login email and personal phone numbers from public queries.
-- Exposes ONLY necessary public information for sellers with approved listings.
-- Executes as owner (security_barrier) to provide safe read-only access.
-- ==============================================================================
create or replace view public.public_seller_profiles
with (security_barrier = true) as
select
  p.id,
  p.full_name,
  p.role,
  p.avatar_url,
  p.is_verified,
  p.member_since
from public.profiles p
where exists (
  select 1 from public.properties prop
  where prop.seller_id = p.id
  and prop.approval_status = 'approved'
);

-- Explicitly ensure view is owned by postgres
alter view public.public_seller_profiles owner to postgres;

-- Grant select access on public seller profiles to anon and authenticated clients
grant select on public.public_seller_profiles to anon, authenticated;

-- ==============================================================================
-- 11. INDEXES FOR HIGH-TRAFFIC QUERY PERFORMANCE
-- ==============================================================================
create index if not exists idx_properties_approval_created on public.properties (approval_status, created_at desc);
create index if not exists idx_properties_district_city on public.properties (district, city);
create index if not exists idx_properties_purpose_type on public.properties (purpose, property_type);
create index if not exists idx_properties_price on public.properties (price);
create index if not exists idx_properties_seller on public.properties (seller_id);
create index if not exists idx_property_images_property on public.property_images (property_id, display_order);
create index if not exists idx_bookmarks_user on public.bookmarks (user_id);
create index if not exists idx_enquiries_property on public.enquiries (property_id);
create index if not exists idx_enquiries_buyer on public.enquiries (buyer_id);
create index if not exists idx_reports_property on public.reports (property_id);
create index if not exists idx_notifications_user_read on public.notifications (user_id, is_read);

-- ==============================================================================
-- 12. ROW LEVEL SECURITY (RLS) POLICIES (Idempotent: Clean Drop & Re-create)
-- ==============================================================================

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.properties enable row level security;
alter table public.property_images enable row level security;
alter table public.bookmarks enable row level security;
alter table public.enquiries enable row level security;
alter table public.reports enable row level security;
alter table public.notifications enable row level security;

-- ------------------------------------------------------------------------------
-- PROFILES POLICIES
-- PRIVACY FIX: Direct SELECT on profiles table is restricted to the user themselves
-- or admins. Unrelated users cannot scrape profiles, emails, or phone numbers.
-- Public property viewers read sanitized seller badges via public_seller_profiles.
-- ------------------------------------------------------------------------------
drop policy if exists "Protected profile viewing" on public.profiles;
drop policy if exists "Users and admins can view profiles" on public.profiles;
create policy "Users and admins can view profiles"
  on public.profiles for select
  using (
    auth.uid() = id
    or public.is_admin()
  );

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id or public.is_admin())
  with check (auth.uid() = id or public.is_admin());

drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id or public.is_admin());

-- ------------------------------------------------------------------------------
-- PROPERTIES POLICIES
-- ------------------------------------------------------------------------------
drop policy if exists "Public can view approved properties" on public.properties;
create policy "Public can view approved properties"
  on public.properties for select
  using (
    approval_status = 'approved'
    or auth.uid() = seller_id
    or public.is_admin()
  );

drop policy if exists "Authenticated users can submit properties" on public.properties;
create policy "Authenticated users can submit properties"
  on public.properties for insert
  with check (
    auth.role() = 'authenticated'
    and auth.uid() = seller_id
    and (
      public.is_admin()
      or (
        approval_status = 'pending'
        and is_verified = false
        and is_featured = false
      )
    )
  );

drop policy if exists "Owners and admins can update properties" on public.properties;
create policy "Owners and admins can update properties"
  on public.properties for update
  using (auth.uid() = seller_id or public.is_admin())
  with check (auth.uid() = seller_id or public.is_admin());

drop policy if exists "Owners and admins can delete properties" on public.properties;
create policy "Owners and admins can delete properties"
  on public.properties for delete
  using (auth.uid() = seller_id or public.is_admin());

-- ------------------------------------------------------------------------------
-- PROPERTY IMAGES POLICIES
-- ------------------------------------------------------------------------------
drop policy if exists "Public can view property images" on public.property_images;
create policy "Public can view property images"
  on public.property_images for select
  using (
    exists (
      select 1 from public.properties p
      where p.id = property_images.property_id
      and (p.approval_status = 'approved' or p.seller_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "Owners and admins can insert property images" on public.property_images;
create policy "Owners and admins can insert property images"
  on public.property_images for insert
  with check (
    exists (
      select 1 from public.properties p
      where p.id = property_images.property_id
      and (p.seller_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "Owners and admins can update property images" on public.property_images;
create policy "Owners and admins can update property images"
  on public.property_images for update
  using (
    exists (
      select 1 from public.properties p
      where p.id = property_images.property_id
      and (p.seller_id = auth.uid() or public.is_admin())
    )
  )
  with check (
    exists (
      select 1 from public.properties p
      where p.id = property_images.property_id
      and (p.seller_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "Owners and admins can delete property images" on public.property_images;
create policy "Owners and admins can delete property images"
  on public.property_images for delete
  using (
    exists (
      select 1 from public.properties p
      where p.id = property_images.property_id
      and (p.seller_id = auth.uid() or public.is_admin())
    )
  );

-- ------------------------------------------------------------------------------
-- BOOKMARKS POLICIES
-- ------------------------------------------------------------------------------
drop policy if exists "Users can view own bookmarks" on public.bookmarks;
create policy "Users can view own bookmarks"
  on public.bookmarks for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "Users can create own bookmarks" on public.bookmarks;
create policy "Users can create own bookmarks"
  on public.bookmarks for insert
  with check (
    auth.uid() = user_id
    and exists (
      select 1 from public.properties p
      where p.id = bookmarks.property_id
      and (p.approval_status = 'approved' or p.seller_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "Users can delete own bookmarks" on public.bookmarks;
create policy "Users can delete own bookmarks"
  on public.bookmarks for delete
  using (auth.uid() = user_id or public.is_admin());

-- ------------------------------------------------------------------------------
-- ENQUIRIES POLICIES
-- ------------------------------------------------------------------------------
drop policy if exists "Sellers and enquirers can view enquiries" on public.enquiries;
create policy "Sellers and enquirers can view enquiries"
  on public.enquiries for select
  using (
    (auth.uid() is not null and auth.uid() = buyer_id)
    or exists (
      select 1 from public.properties p
      where p.id = enquiries.property_id and p.seller_id = auth.uid()
    )
    or public.is_admin()
  );

drop policy if exists "Anyone can submit an enquiry" on public.enquiries;
create policy "Anyone can submit an enquiry"
  on public.enquiries for insert
  with check (
    (
      -- Authenticated buyers must strictly bind the enquiry to their own user ID
      (auth.role() = 'authenticated' and buyer_id = auth.uid())
      or
      -- Unauthenticated visitors are prohibited from impersonating registered user IDs
      (auth.role() <> 'authenticated' and buyer_id is null)
    )
    and exists (
      select 1 from public.properties p
      where p.id = enquiries.property_id
      and (p.approval_status = 'approved' or public.is_admin())
    )
  );

drop policy if exists "Sellers can update enquiry status" on public.enquiries;
create policy "Sellers can update enquiry status"
  on public.enquiries for update
  using (
    exists (
      select 1 from public.properties p
      where p.id = enquiries.property_id and p.seller_id = auth.uid()
    )
    or public.is_admin()
  )
  with check (
    exists (
      select 1 from public.properties p
      where p.id = enquiries.property_id and p.seller_id = auth.uid()
    )
    or public.is_admin()
  );

drop policy if exists "Sellers and admins can delete enquiries" on public.enquiries;
create policy "Sellers and admins can delete enquiries"
  on public.enquiries for delete
  using (
    exists (
      select 1 from public.properties p
      where p.id = enquiries.property_id and p.seller_id = auth.uid()
    )
    or public.is_admin()
  );

-- ------------------------------------------------------------------------------
-- REPORTS POLICIES
-- ------------------------------------------------------------------------------
drop policy if exists "Admins and reporters can view reports" on public.reports;
create policy "Admins and reporters can view reports"
  on public.reports for select
  using (public.is_admin() or (auth.uid() is not null and auth.uid() = reporter_id));

drop policy if exists "Anyone can submit a report" on public.reports;
create policy "Anyone can submit a report"
  on public.reports for insert
  with check (
    (
      (auth.role() = 'authenticated' and reporter_id = auth.uid())
      or
      (auth.role() <> 'authenticated' and reporter_id is null)
    )
    and status = 'investigating'
    and exists (
      select 1 from public.properties p
      where p.id = reports.property_id
    )
  );

drop policy if exists "Admins can update reports" on public.reports;
create policy "Admins can update reports"
  on public.reports for update
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins can delete reports" on public.reports;
create policy "Admins can delete reports"
  on public.reports for delete
  using (public.is_admin());

-- ------------------------------------------------------------------------------
-- NOTIFICATIONS POLICIES
-- ------------------------------------------------------------------------------
drop policy if exists "Users can view own notifications" on public.notifications;
create policy "Users can view own notifications"
  on public.notifications for select
  using (auth.uid() = user_id);

drop policy if exists "Users can update own notification read state" on public.notifications;
create policy "Users can update own notification read state"
  on public.notifications for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete own notifications" on public.notifications;
create policy "Users can delete own notifications"
  on public.notifications for delete
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "Only admins can insert notifications" on public.notifications;
create policy "Only admins can insert notifications"
  on public.notifications for insert
  with check (public.is_admin());

-- ==============================================================================
-- 13. SUPABASE STORAGE BUCKET & POLICIES (Property Photos)
-- STORAGE PRIVACY & PATH ISOLATION:
-- Users can only upload into their own folder: <auth.uid()>/...
-- Prevents attaching arbitrary files to another user's property directory.
-- ==============================================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'property-images',
  'property-images',
  true,
  5242880, -- 5MB limit per image
  array['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

drop policy if exists "Public can view property images storage" on storage.objects;
create policy "Public can view property images storage"
  on storage.objects for select
  using (bucket_id = 'property-images');

-- Authenticated users can ONLY upload into their own user directory: <auth.uid()>/...
drop policy if exists "Authenticated users can upload property images storage" on storage.objects;
create policy "Authenticated users can upload property images storage"
  on storage.objects for insert
  with check (
    bucket_id = 'property-images'
    and auth.role() = 'authenticated'
    and (
      public.is_admin()
      or (storage.foldername(name))[1] = auth.uid()::text
    )
  );

drop policy if exists "Users can update own property images storage" on storage.objects;
create policy "Users can update own property images storage"
  on storage.objects for update
  using (
    bucket_id = 'property-images'
    and (
      public.is_admin()
      or (
        (storage.foldername(name))[1] = auth.uid()::text
        and auth.uid() = owner
      )
    )
  )
  with check (
    bucket_id = 'property-images'
    and (
      public.is_admin()
      or (
        (storage.foldername(name))[1] = auth.uid()::text
        and auth.uid() = owner
      )
    )
  );

drop policy if exists "Users and admins can delete property images storage" on storage.objects;
create policy "Users and admins can delete property images storage"
  on storage.objects for delete
  using (
    bucket_id = 'property-images'
    and (
      public.is_admin()
      or (
        (storage.foldername(name))[1] = auth.uid()::text
        and auth.uid() = owner
      )
    )
  );
