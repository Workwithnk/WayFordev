import React from "react";
import apiImage from "../images/apiImageHome.png";
import "../CSS/AllApiHome.css";
import { NavLink } from "react-router-dom";

function AllApiHome() {
  return (
    <div className="AllApiHome">
      <img className="image_AAH" src={apiImage} alt="apiImage_Home" />
      <div className="second_AAH">
        <div className="p_second_AAh">
          <p>
            An API (Application programming interface) that we can consider as
            medium to talk two or more applications to each other.
          </p>
          <p>
            API has some functionalities to access data and interaction with
            another applications.
          </p>
          <p> Here i have collect some public api.</p>
          <p>
            I hope that , Those API's are help you to developing your
            application on good way.
          </p>
        </div>
        <NavLink to="/api">API</NavLink>
      </div>
    </div>
  );
}

export default AllApiHome;
