import React from "react";
import { NavLink } from "react-router-dom";
import { ObjectiveCData, swiftData } from "../../Data/MobileApp";
import { FaObjectGroup, FaSwift } from "react-icons/fa";
import {
  mongoDbData,
  mySqlData,
  postrageDBData,
  sqliteData,
} from "../../Data/webDevData";
import { SiMysql, SiMongodb, SiSqlite } from "react-icons/si";
import { GiElephant } from "react-icons/gi";
import "../../CSS/Comman.css";

function IOS() {
  return (
    <div>
      <div className="comman_Header">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>IOS development</h1>
        <NavLink className="comman_NextLink" to="/crossplate">
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
        {ObjectiveCData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaObjectGroup className=" Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Apple}>Apple</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>

                  <li>
                    <a href={data.links.Binpress}>Binpress</a>
                  </li>
                  <li>
                    <a href={data.links.udemy}>udemy</a>
                  </li>
                  <li>
                    <a href={data.links.coursera}>coursera</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {swiftData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaSwift className=" emberIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Apple}>Apple</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>

                  <li>
                    <a href={data.links.codeacademy}>codeacademy</a>
                  </li>
                  <li>
                    <a href={data.links.udemy}>udemy</a>
                  </li>
                  <li>
                    <a href={data.links.coursera}>coursera</a>
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
        Database
      </h1>
      <div className="Skills_Comman_Header">
        {mySqlData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiMysql className=" muSqlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.MySQL}>MySQL</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
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
                </ul>
              </div>
            </div>
          );
        })}
        {postrageDBData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <GiElephant className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Datacamp}>Datacamp</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.codecademy}>codecademy</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>

                  <li>
                    <a href={data.links.Guru99}>Guru99</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {mongoDbData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiMongodb className=" vueIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.MongoDb}>MongoDb</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
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
                </ul>
              </div>
            </div>
          );
        })}
        {sqliteData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiSqlite className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.SQLite}>SQLite</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.Datacamp}>Datacamp</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>

                  <li>
                    <a href={data.links.Guru99}>Guru99</a>
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

export default IOS;
