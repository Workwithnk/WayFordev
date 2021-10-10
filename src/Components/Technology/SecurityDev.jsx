import React from "react";
import { FaJava } from "react-icons/fa";
import { GiElephant } from "react-icons/gi";
import {
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiPython,
  SiSqlite,
} from "react-icons/si";
import { NavLink } from "react-router-dom";
import { cplusplusData } from "../../Data/GameDevData";
import { javaData, pythonData } from "../../Data/MobileApp";
import {
  mongoDbData,
  mySqlData,
  postrageDBData,
  sqliteData,
} from "../../Data/webDevData";

function SecurityDev() {
  React.useEffect(() => {
    document.title = "WayForDev | Security Developer";
  }, []);
  return (
    <div className="BackToTop">
      <div className="comman_Header BackToTop">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>Security Developer</h1>
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
        {javaData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <FaJava className=" htmlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
                  </li>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>

                  <li>
                    <a href={data.links.Guru99}>Guru99</a>
                  </li>
                  <li>
                    <a href={data.links.Geeksforgeek}>Geeksforgeek</a>
                  </li>
                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
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
      <h1
        style={{
          color: "#34495e",
          textDecoration: "underline",
          margin: "16px",
          fontFamily: "Montserrat",
          fontSize: "21px",
        }}
      >
        Tools and Technique
      </h1>
      <div className="details_Comman">
        <ul>
          <li>
            <a href="https://portswigger.net/burp">Burp suite</a>
            <p>
              Burp Suite Professional is one of the most popular penetration
              testing and vulnerability finder tools, and is often used for
              checking web application security.
            </p>
          </li>
          <li>
            <a href="https://owasp.org/www-project-zap/">Zet Attack Proxy</a>
            <p>
              OWASP ZAP (short for Zed Attack Proxy) is an open-source web
              application security scanner.
            </p>
          </li>
          <li>
            <a href="https://modsecurity.org/">Mod Security</a>
            <p>
              ModSecurity, sometimes called Modsec, is an open-source web
              application firewall. Originally designed as a module for the
              Apache HTTP Server, it has evolved to provide an array of
              Hypertext Transfer.
            </p>
          </li>
          <li>
            <a href="https://www.whitesourcesoftware.com/free-developer-tools/bolt/">
              White Source Bolt
            </a>
            <p>
              Bolt is a free tool by WhiteSource that allows finding and fixing
              open source vulnerabilities in software projects.
            </p>
          </li>
          <li>
            <a href="https://lgtm.com/">LGTM</a>
            <p>
              LGTM analyzes the entire history of a project, so you can see how
              your alerts have changed over time, and which specific events or
              commits had the biggest impact on your code quality.
            </p>
          </li>

          <li>
            <a href="https://code.google.com/archive/p/skipfish/">Skipfish</a>
            <p>
              Skipfish is an active web application security reconnaissance
              tool. It prepares an interactive sitemap for the targeted site by
              carrying out a recursive crawl and dictionary-based probes. The
              resulting map is then annotated with the output from a number of
              active security checks.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SecurityDev;
