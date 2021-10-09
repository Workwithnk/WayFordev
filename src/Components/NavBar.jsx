import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "../CSS/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="first_NB">
        <Link
          style={{ cursor: "pointer" }}
          to="home"
          smooth={true}
          duration={1000}
        >
          WayForDev
        </Link>
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
