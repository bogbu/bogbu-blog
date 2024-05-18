import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabase: SupabaseClient;

if (typeof window !== 'undefined') {
  supabase = createClient(
    'https://lkgbxptqilkrzaodhglx.supabase.co', // Supabase URL
    'your-public-api-key' // Public API Key
  )
}

export { supabase }