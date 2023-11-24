import { DarkThemeToggle, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";

const Header = () => {
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
              My Sources
            </span>
          </Link>
        </div>
        <DarkThemeToggle className={"ml-auto mr-4"} />
        <Navbar.Toggle />
        <Navbar.Collapse>
          <HeaderLink to={"/"} text={"Home"} />
          <HeaderLink to={"/about"} text={"About"} />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
