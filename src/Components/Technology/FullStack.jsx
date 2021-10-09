import React from "react";
import { NavLink } from "react-router-dom";
import {
  angularjsData,
  bootstrapData,
  cssData,
  emberData,
  htmlData,
  jsData,
  reactjsData,
  vueData,
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
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaVuejs,
  FaEmber,
  FaBootstrap,
  FaNodeJs,
  FaLaravel,
} from "react-icons/fa";
import {
  SiJavascript,
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

import { GiCherry, GiElephant } from "react-icons/gi";

import "../../CSS/Comman.css";

function FullStack() {
  return (
    <div>
      <div className="comman_Header">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>FullStack Development</h1>
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
        FrontEnd technologies
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
        {reactjsData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaReact className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Reactjs}>Reactjs</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.codecademy}>codecademy</a>
                  </li>

                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {angularjsData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaAngular className=" htmlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Angular}>Angular</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.AngularJs}>AngularJs</a>
                  </li>

                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {vueData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaVuejs className=" vueIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.VueJs}>VueJs</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.codecademy}>codecademy</a>
                  </li>

                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {emberData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaEmber className=" emberIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Emberjs}>Ember Js</a>
                  </li>
                  <li>
                    <a href={data.links.Hackerdotio}>Hackerdotio</a>
                  </li>
                  <li>
                    <a href={data.links.Medium}>Medium</a>
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
        {bootstrapData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaBootstrap className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.getbootstrap}>Getbootstrap</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a target="_blank" href={data.links.Tutorialspoint}>
                      Tutorialspoint
                    </a>
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
        Backend technologies and Database
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
      <h1
        style={{
          color: "#34495e",
          textDecoration: "underline",
          margin: "16px",
          fontFamily: "Montserrat",
          fontSize: "21px",
        }}
      >
        Some popular stacks
      </h1>
      <div className="stack_comman">
        <div className="stackData_Comman">
          <h1>MERN stack :</h1>
          <p>MongoDB , Express.js , React.js , Node.js</p>
        </div>
        <div className="stackData_Comman">
          <h1>MEAN stack :</h1>
          <p>MongoDB , Express.js , Angular.js , Node.js</p>
        </div>
        <div className="stackData_Comman">
          <h1>Django stack :</h1>
          <p>Django , Python , MySql </p>
        </div>
        <div className="stackData_Comman">
          <h1>Ruby on Rails :</h1>
          <p>Ruby , PHP , MySql</p>
        </div>
        <div className="stackData_Comman">
          <h1>LAMP stack :</h1>
          <p>Linux , Apache , MySql , PHP</p>
        </div>
      </div>
    </div>
  );
}

export default FullStack;
