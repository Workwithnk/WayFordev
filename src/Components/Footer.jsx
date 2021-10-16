import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3>Powerd by WayForDev</h3>
      <div className="second_footer">
        <NavLink to="termsAndCon">Terms&Conditions</NavLink>
        <NavLink to="disclaimer">Disclaimer</NavLink>
        <NavLink to="privacypolicy">PrivacyPolicy</NavLink>
        <NavLink to="sitemap">sitemap</NavLink>
      </div>
    </div>
  );
}

export default Footer;
