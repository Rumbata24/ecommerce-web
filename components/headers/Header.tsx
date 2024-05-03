import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <div className="navbar justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-lg">
          ECommerce Web
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
