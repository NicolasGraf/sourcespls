import { Card } from "flowbite-react";
import SocialLogin from "../components/login/SocialLogin";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full w-full justify-center items-center px-4 dark:text-primary-light">
      <Card className="w-full max-w-[28rem]">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <h4 className="mb-2">
          Sign up for free to save and edit your links and sources. No credit
          card or hidden costs involved.
        </h4>
        <SocialLogin />
        <h4 className="text-center">or</h4>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
