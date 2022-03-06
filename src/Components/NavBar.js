import React from "react";
import Logo from "../images/airbnb-logo.png";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function NavBar() {
  return (
    <nav>
      <img id="logo" src={Logo} alt="logo of the site" />
    </nav>
  );
}
