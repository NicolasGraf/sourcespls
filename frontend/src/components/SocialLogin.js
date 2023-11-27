import React from "react";
import { supabase } from "../lib/supaBaseClient";
import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {
  const handleLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });

    if (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <Button className="w-full" onClick={() => handleLogin("google")} outline>
        <FcGoogle className="text-3xl mr-2" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default SocialAuth;
