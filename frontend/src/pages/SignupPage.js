import React from "react";
import { Card } from "flowbite-react";
import SignupForm from "../components/login/SignupForm";

const SignupPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full w-full justify-center items-center px-4 dark:text-primary-light">
      <Card className="w-full max-w-[28rem]">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        <p className="mb-2">
          Sign up for free to save and edit your links and sources. No credit
          card or hidden costs involved.
        </p>
        <SignupForm />
      </Card>
    </div>
  );
};

export default SignupPage;
