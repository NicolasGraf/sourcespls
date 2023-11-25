import { useLinkClickHandler, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

const HeaderLink = ({ to, text }) => {
  const location = useLocation();
  const linkHandler = useLinkClickHandler(to);

  return (
    <Navbar.Link
      as={"a"}
      onClick={linkHandler}
      href={to}
      active={location.pathname === to}
    >
      {text}
    </Navbar.Link>
  );
};

export default HeaderLink;
