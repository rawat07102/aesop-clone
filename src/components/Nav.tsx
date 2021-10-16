import React from "react";
import NavLink from "./NavLink";

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex absolute w-full py-7 px-9 justify-between z-10">
      <div className="flex justify-between w-60">
        <NavLink href="#">Shop</NavLink>
        <NavLink href="#">Read</NavLink>
        <NavLink href="#">Stores</NavLink>
        <NavLink href="#">Search</NavLink>
      </div>
      <div className="flex justify-between w-28">
        <NavLink href="#">Login</NavLink>
        <NavLink href="#">Cart</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
