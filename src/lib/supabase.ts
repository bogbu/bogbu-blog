import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    'https://lkgbxptqilkrzaodhglx.supabase.co', // Supabase URL
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZ2J4cHRxaWxrcnphb2RoZ2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwMjc4MjIsImV4cCI6MjAxNzYwMzgyMn0.QbNGVIm3RgfOeIxnzYwc8hOr1m1XxKTBecwNCmRfvPc' // Public API Key
)

export { supabase }