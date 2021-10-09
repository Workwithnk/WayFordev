import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/Web.gif";
import mobile from "../images/mobile.gif";
import data from "../images/data.png";
import game from "../images/Game.png";
import devops from "../images/DevOps.png";
import cloud from "../images/cloudEngineer.png";
import "../CSS/WaysSection.css";

function WaysSection() {
  return (
    <div className="WaysSection" id="ways">
      <div className="cardsContainer_Ways">
        <div className="cards_waySection">
          <img src={web} alt="ways_image" />
          <div className="data_Card_WS">
            <h3>Web Developer</h3>
            <NavLink to="/fullstack">start</NavLink>
          </div>
        </div>
        <div className="cards_waySection">
          <img src={mobile} alt="ways_image" />
          <div className="data_Card_WS">
            <h3>Mobile Developer</h3>
            <NavLink to="/crossplate">start</NavLink>
          </div>
        </div>
        <div className="cards_waySection">
          <img src={data} alt="ways_image" />
          <div className="data_Card_WS">
            <h3>Data Scientist</h3>
            <NavLink to="/datascience">start</NavLink>
          </div>
        </div>
        <div className="cards_waySection">
          <img src={game} alt="ways_image" />
          <div className="data_Card_WS">
            <h3>Game Developer</h3>
            <NavLink to="/game">start</NavLink>
          </div>
        </div>
        <div className="cards_waySection">
          <img src={devops} alt="ways_image" />
          <div className="data_Card_WS">
            <h3>DevOps</h3>
            <NavLink to="/devops">start</NavLink>
          </div>
        </div>
        <div className="cards_waySection">
          <img src={cloud} alt="ways_image" />
          <div className="data_Card_WS">
            <h3>Cloud engineer</h3>
            <NavLink to="/cloud">start</NavLink>
          </div>
        </div>
      </div>
      <div className="button_Ways">
        <NavLink to="/allWays">More Ways</NavLink>
      </div>
    </div>
  );
}

export default WaysSection;
