import { createClient } from '@supabase/supabase-js';
// import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from '$env/static/public';
const supabase = createClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL,
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
)

export { supabase }