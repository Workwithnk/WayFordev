import React from "react";
import { NavLink } from "react-router-dom";
import { SiAdobe, SiFigma, SiInvision, SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { cssData, htmlData, jsData } from "../../Data/webDevData";
import { AiFillHtml5 } from "react-icons/ai";
import "../../CSS/Comman.css";
import { adobexddata, figmadata, invisionData } from "../../Data/UiUxData";

function UiUx() {
  return (
    <div>
      <div className="comman_Header">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>UI/UX developer</h1>
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
        Technologies
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
        Plateforms
      </h1>
      <div className="Skills_Comman_Header">
        {adobexddata.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiAdobe className=" adobeXDIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Adobe}>Adobe</a>
                  </li>
                  <li>
                    <a href={data.links.Geeksforgeek}>Geeksforgeek</a>
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
        {figmadata.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiFigma className=" emberIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Figma}>Figma</a>
                  </li>
                  <li>
                    <a href={data.links.Udemy}>Udemy</a>
                  </li>

                  <li>
                    <a href={data.links.Medium}>Medium</a>
                  </li>
                  <li>
                    <a href={data.links.Youtube}>Youtube</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {invisionData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiInvision className="  Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Invisionapp}>Invisionapp</a>
                  </li>
                  <li>
                    <a href={data.links.Udemy}>Udemy</a>
                  </li>

                  <li>
                    <a href={data.links.Learninvisionstudio}>
                      Learninvisionstudio
                    </a>
                  </li>
                  <li>
                    <a href={data.links.Youtube}>Youtube</a>
                  </li>
                  <li>
                    <a href={data.links.HackerIo}>HackerIo</a>
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

export default UiUx;
