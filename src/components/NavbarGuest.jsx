import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function NavbarGuest() {
  return (
    <nav>
      <div className="navMenu">
        <NavLink to="/homeGuest" className={({ isActive }) => isActive ? "menuActive" : "menuNonActive"}>
          Home
        </NavLink>
        <a href="">
          <div className="menuNonActive">Gallery</div>
        </a>
        <a href="">
          <div className="menuNonActive">Jobs</div>
        </a>
        <a href="About.html">
          <div className="menuNonActive">About Us</div>
        </a>
      </div>

      

      <div className="navGiggle">
        <div className="giggle">Giggle’s</div>
      </div>

      <div className="navButton">
        <div className="login">
          <div className="fontButton">
            <a href="login.html"> Login </a>
          </div>
        </div>
        <div className="signUp">
          <div className="fontButton">
            <a href="Register.html">Sign Up </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarGuest;
