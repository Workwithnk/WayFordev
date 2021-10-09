import React from "react";
import {
  SiDjango,
  SiNextdotjs,
  SiExpress,
  SiGatsby,
  SiSpringboot,
  SiCodeigniter,
  SiDotnet,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { NavLink } from "react-router-dom";
import { FaNodeJs, FaLaravel } from "react-icons/fa";
import { GiCherry, GiElephant } from "react-icons/gi";
import {
  aspDotNetData,
  cherrypyData,
  codeigniterData,
  DjangoData,
  expressJs,
  gatsbyjsData,
  laravelData,
  mongoDbData,
  mySqlData,
  nextjsData,
  nodejsData,
  postrageDBData,
  springData,
} from "../../Data/webDevData";
import "../../CSS/Comman.css";

function BackEnd() {
  return (
    <div>
      <div className="comman_Header">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>BackEnd Development</h1>
        <NavLink className="comman_NextLink" to="/fullstack">
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
        Frameworks
      </h1>
      <div className="Skills_Comman_Header">
        {DjangoData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiDjango className=" djangoIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.djangoproject}>djangoproject</a>
                  </li>
                  <li>
                    <a href={data.links.Mozila}>Mozila</a>
                  </li>
                  <li>
                    <a href={data.links.fullstackpython}>fullstackpython</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>

                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {cherrypyData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <GiCherry className=" htmlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.CherryPy}>CherryPy</a>
                  </li>
                  <li>
                    <a href={data.links.wisdomjobs}>wisdomjobs</a>
                  </li>
                  <li>
                    <a href={data.links.udamy}>udamy</a>
                  </li>
                  <li>
                    <a href={data.links.Geeksforgeeks}>Geeksforgeeks</a>
                  </li>

                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {nextjsData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiNextdotjs className=" djangoIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.NextJs}>NextJs</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.freecodecamp}>freecodecamp</a>
                  </li>
                  <li>
                    <a href={data.links.awesomeopensource}>awesomeopensource</a>
                  </li>

                  <li>
                    <a href={data.links.masteringnextjs}>masteringnextjs</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {expressJs.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiExpress className=" djangoIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Express}>Express Js</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.Mozila}>Mozila</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>

                  <li>
                    <a href={data.links.freecodecamp}>freecodecamp</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {nodejsData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaNodeJs className=" vueIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.NodeJs}>NodeJs</a>
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
                    <a href={data.links.Geeksforgeeks}>Geeksforgeeks</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {gatsbyjsData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiGatsby className=" getsByIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Getsby}>Getsby</a>
                  </li>
                  <li>
                    <a href={data.links.freecodecamp}>freecodecamp</a>
                  </li>
                  <li>
                    <a href={data.links.udamy}>udamy</a>
                  </li>
                  <li>
                    <a href={data.links.Medium}>Medium</a>
                  </li>

                  <li>
                    <a href={data.links.Contentful}>Contentful</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {laravelData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaLaravel className=" htmlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Laravel}>Laravel</a>
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
        {codeigniterData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiCodeigniter className=" htmlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Codeigniter}>Codeigniter</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.w3adda}>w3adda</a>
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
        {springData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiSpringboot className=" vueIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Spring}>Spring</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.corsera}>corsera</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>

                  <li>
                    <a href={data.links.udamy}>udamy</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {aspDotNetData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiDotnet className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.codecademy}>codecademy</a>
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
      </div>
    </div>
  );
}

export default BackEnd;
