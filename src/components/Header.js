import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Get the current location

  return (
    <header>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;