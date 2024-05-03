import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navbar justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-lg">
          ECommerce Web
        </Link>
        <ul className="flex">
          <li>
            <Link className="btn btn-ghost rounded-btn" href="cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="btn btn-ghost rounded-btn" href="sign-in">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
