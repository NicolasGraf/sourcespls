import { Card } from "flowbite-react";
import SocialLogin from "../components/login/SocialLogin";

const LoginPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full w-full justify-center items-center px-4 dark:text-primary-light">
      <Card className="w-full max-w-[28rem]">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <h4>
          Sign up for free to save and edit your links and sources. No credit
          card or hidden costs involved.
        </h4>
        <SocialLogin />
      </Card>
    </div>
  );
};

export default LoginPage;
