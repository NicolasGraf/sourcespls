const { createClient } = require("@supabase/supabase-js");

let supabaseClient;

function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createClient(
      "https://eyzzqvyfhtrzvqrqqlbq.supabase.co",
      process.env.SUPABASE_KEY,
    );
  }
  return supabaseClient;
}

module.exports = { getSupabaseClient };
