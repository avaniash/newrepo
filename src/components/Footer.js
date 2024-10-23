import React from "react";
import { Link, useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation(); // Get the current location
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer>
           <p>© {currentYear} My Website. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
