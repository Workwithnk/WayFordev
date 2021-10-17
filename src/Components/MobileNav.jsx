import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "../CSS/MobileNav.css";
import { AiOutlineClose } from "react-icons/ai";

function MobileNav() {
  const [hamberg, setHamberg] = useState(false);

  const handleHamberger = () => {
    setHamberg(!hamberg);
  };

  const handleLinkClick = () => {
    const togglerContainer = document.querySelector(".togglerContainer");
    togglerContainer.style.display = "none";
    setHamberg(false);
  };

  return (
    <div className="mobileNav">
      <div className="first_MBN">
        <img className="logo_MBN" src={Logo} alt="Logo_Nav" />
        <NavLink to="/">WayForDev</NavLink>
      </div>
      <div className="second_MBN">
        {hamberg ? (
          <AiOutlineClose
            className="closeIcons_MBN"
            onClick={handleHamberger}
          />
        ) : (
          <HiOutlineMenuAlt1
            className="menuIcons_MBN"
            onClick={handleHamberger}
          />
        )}
      </div>
      {hamberg && (
        <ul className="togglerContainer">
          <li>
            <NavLink onClick={handleLinkClick} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleLinkClick} to="/allWays">
              Ways
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleLinkClick} to="/api">
              API
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileNav;
