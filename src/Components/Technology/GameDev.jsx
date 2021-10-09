import React from "react";
import { NavLink } from "react-router-dom";
import {
  SiJavascript,
  SiCplusplus,
  SiCsharp,
  SiPython,
  SiUnity,
  SiGodotengine,
  SiUnrealengine,
} from "react-icons/si";
import { cssData, htmlData, jsData } from "../../Data/webDevData";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import "../../CSS/Comman.css";
import {
  cplusplusData,
  csarpData,
  godotData,
  unityData,
  unrealengData,
} from "../../Data/GameDevData";
import { pythonData } from "../../Data/MobileApp";

function GameDev() {
  return (
    <div>
      <div className="comman_Header">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>Game Development</h1>
        <NavLink className="comman_NextLink" to="/allWays">
          Next
        </NavLink>
      </div>
      <h1
        style={{
          color: "#34495e",
          textDecoration: "underline",
          margin: "16px",
          fontFamily: "Montserrat",
          fontSize: "21px",
        }}
      >
        Languages
      </h1>
      <div className="Skills_Comman_Header">
        {htmlData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <AiFillHtml5 className=" htmlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.html}>HTML</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>

                  <li>
                    <a href={data.links.Mozila}>Mozila</a>
                  </li>
                  <li>
                    <a href={data.links.freecodecamp}>Freecodecamp</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {cssData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaCss3Alt className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Sololearn}>Sololearn</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a href={data.links.WebDev}>WebDev</a>
                  </li>
                  <li>
                    <a href={data.links.Mozila}>Mozila</a>
                  </li>

                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {jsData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiJavascript className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.JavaScript}>JavaScript</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.Mozila}>Mozila</a>
                  </li>

                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {cplusplusData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiCplusplus className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Geeksforgeek}>Geeksforgeek</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>

                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.Guru99}>Guru99</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {csarpData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiCsharp className=" getsByIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Geeksforgeek}>Geeksforgeek</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>

                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.Guru99}>Guru99</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {pythonData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiPython className="cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>

                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.Guru99}>Guru99</a>
                  </li>
                  <li>
                    <a href={data.links.Geeksforgeek}>Geeksforgeek</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <h1
        style={{
          color: "#34495e",
          textDecoration: "underline",
          margin: "16px",
          fontFamily: "Montserrat",
          fontSize: "21px",
        }}
      >
        Tools
      </h1>
      <div className="Skills_Comman_Header">
        {unityData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiUnity className="  Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Unity}>Unity</a>
                  </li>
                  <li>
                    <a href={data.links.Microsoft}>Microsoft</a>
                  </li>

                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.Udemy}>Udemy</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {godotData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiGodotengine className="cssIcon  Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Godot}>Godot</a>
                  </li>
                  <li>
                    <a href={data.links.Godottutorials}>Godottutorials</a>
                  </li>

                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.Gdquest}>Gdquest</a>
                  </li>
                  <li>
                    <a href={data.links.Youtube}>Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {unrealengData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiUnrealengine className=" Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Unrealenginee}>Unrealenginee</a>
                  </li>
                  <li>
                    <a href={data.links.Udemy}>Udemy</a>
                  </li>

                  <li>
                    <a href={data.links.Reddit}>Reddit</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.Youtube}>Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameDev;
