import { useLinkClickHandler, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

const HeaderLink = ({ to, text }) => {
  const location = useLocation();
  const linkHandler = useLinkClickHandler(to);

  const getActive = () => {
    const active = location.pathname === to;
    const activeSubRoute = location.pathname.startsWith(`${to}/`);
    return active || activeSubRoute;
  };

  return (
    <Navbar.Link as={"a"} onClick={linkHandler} href={to} active={getActive()}>
      {text}
    </Navbar.Link>
  );
};

export default HeaderLink;
