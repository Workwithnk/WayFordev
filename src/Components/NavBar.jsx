import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../images/Logo.png";
import "../CSS/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="first_NB">
        <img className="logo_NB" src={Logo} alt="Logo_Nav" />
        <NavLink to="/">WayForDev</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allWays">Ways</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
