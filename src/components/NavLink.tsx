import React from "react";

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const NavLink: React.FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <a {...props} className="flex flex-col overflow-hidden nav-link">
      {children}
      <span className="transition-transform ease-in transform w-full bg-black -translate-x-full pt-px mt-px"></span>
    </a>
  );
};

export default NavLink;
