import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import "../CSS/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="ErrorPage">
      <img src={Logo} alt="Logo_Image" />
      <h1>Page Not Found</h1>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default ErrorPage;
