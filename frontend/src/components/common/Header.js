import { DarkThemeToggle, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import HeaderLogin from "./HeaderLogin";
import { useAuth } from "../../lib/authProvider";

const Header = () => {
  const { user } = useAuth();
  const isLoggedIn = !!user;

  return (
    <header>
      <Navbar fluid rounded>
        <div className="flex">
          <Link to={"/"} className="flex">
            <img
              src="/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Sources Please
            </span>
          </Link>
        </div>
        <DarkThemeToggle className={"ml-auto mr-4"} />
        <Navbar.Toggle />
        <Navbar.Collapse>
          <HeaderLink to={"/"} text={"Home"} />
          {isLoggedIn && <HeaderLink to={"/dashboard"} text={"Dashboard"} />}
          <HeaderLink to={"/about"} text={"About"} />
          <HeaderLogin />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
