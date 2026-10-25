import { createClient } from '@supabase/supabase-js';

/**
 * VeeduX Supabase Client Configuration
 *
 * Reads public Vite environment variables:
 * - VITE_SUPABASE_URL
 * - VITE_SUPABASE_ANON_KEY
 *
 * SECURITY:
 * Only the public anon key must be used on the client.
 * Never expose the Supabase service_role key in frontend client code.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() || '';
const supabaseAnonKey = (
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)?.trim() || '';

// Simple validation to verify credentials exist and are not placeholder values
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('your-project') &&
  !supabaseAnonKey.includes('your-anon-key') &&
  !supabaseAnonKey.includes('your-publishable-key')
);

// Safely instantiate client only when valid credentials are provided
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

if (!isSupabaseConfigured && import.meta.env.DEV) {
  console.info(
    '[VeeduX] Supabase credentials not found or unconfigured. Application is operating in demo/mock data mode.'
  );
}
