import { Card } from "flowbite-react";
import SocialLogin from "../components/login/SocialLogin";
import LoginForm from "../components/login/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full w-full justify-center items-center px-4 dark:text-primary-light">
      <Card className="w-full max-w-[28rem]">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <SocialLogin />
        <p className="text-center">or</p>
        <LoginForm />
        <p>
          To create an account:{" "}
          <Link to={"/signup"} className="text-accent">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
