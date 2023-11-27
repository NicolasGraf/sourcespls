import { getSupabaseClient } from "./SupabaseManager.js";

const checkAuth = async (req, res, next) => {
  const supabase = getSupabaseClient();
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "No token provided" });
  try {
    const { data, error } = await supabase.auth.getUser(token);

    if (error) throw error;
    if (!data) return res.status(401).json({ error: "Unauthorized" });

    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const resolveToken = async (req, res, next) => {
  const supabase = getSupabaseClient();
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const { data, error } = await supabase.auth.getUser(token);
    const { user } = data;

    if (!error && user) {
      req.user = user;
      console.log(user);
    } else {
      throw error;
    }
  }
  next();
};

export { checkAuth, resolveToken };
