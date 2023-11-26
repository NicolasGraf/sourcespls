// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eyzzqvyfhtrzvqrqqlbq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5enpxdnlmaHRyenZxcnFxbGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTYxMzIsImV4cCI6MjAxNjE3MjEzMn0._fx_tmBGMUHbv82ppTAmxtT86GUYkOVmVUjveH4hgME";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
