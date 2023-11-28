import { useAuth } from "../../lib/authProvider";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const HeaderLogin = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const onClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      logout();
    }
  };

  return (
    <Button
      outline
      className="text-primary-dark hover:text-accent dark:text-secondary-light hover:dark:text-accent focus:ring-0"
      onClick={onClick}
    >
      {user ? "Logout" : "Login"}
    </Button>
  );
};

export default HeaderLogin;
