const { getSupabaseClient } = require("./SupabaseManager.js");
const supabase = getSupabaseClient();

const checkAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'No token provided' });
    try {
        const { data: user, error } = await supabase.auth.getUser(token);

        if (error) throw error;
        if (!user) return res.status(401).json({ error: 'Unauthorized' });

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};

module.exports = checkAuth;
