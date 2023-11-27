import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supaBaseClient";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      const session = data.session;
      if (session) setUser(session.user);
      setLoading(false);
    };

    checkUserSession();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
