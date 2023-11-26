import React from "react";
import { supabase } from "../lib/supaBaseClient";
import { Button } from "flowbite-react";

const SocialAuth = () => {
  const handleLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "http://localhost:3000/redirect",
      },
    });

    if (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <Button onClick={() => handleLogin("google")}>Sign in with Google</Button>
    </div>
  );
};

export default SocialAuth;
