import { Card } from "flowbite-react";
import SocialLogin from "../components/SocialLogin";

const LoginPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full w-full justify-center items-center px-4">
      <Card className="w-full max-w-[28rem]">
        <SocialLogin />
      </Card>
    </div>
  );
};

export default LoginPage;
