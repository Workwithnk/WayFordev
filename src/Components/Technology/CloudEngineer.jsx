import React from "react";
import { NavLink } from "react-router-dom";
import { mongoDbData, mySqlData } from "../../Data/webDevData";
import { SiMysql, SiMongodb } from "react-icons/si";
import { hadoopData } from "../../Data/DataSci";
import { GiElephant } from "react-icons/gi";
import "../../CSS/Comman.css";

function CloudEngineer() {
  React.useEffect(() => {
    document.title = "WayForDev | Cloud Engineer";
  }, []);
  return (
    <div className="BackToTop">
      <div className="comman_Header BackToTop">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>Cloud Engineer</h1>
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
        Tools , Database and Technologies
      </h1>
      <div className="Skills_Comman_Header">
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
        {hadoopData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <GiElephant className=" cssIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.w3Schools}>w3Schools</a>
                  </li>
                  <li>
                    <a href={data.links.Guru99}>Guru99</a>
                  </li>

                  <li>
                    <a href={data.links.Javatpoint}>Javatpoint</a>
                  </li>
                  <li>
                    <a href={data.links.w3adda}>w3adda</a>
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
        Tools and Technique
      </h1>
      <div className="details_Comman">
        <ul>
          <li>
            <a href="https://aws.amazon.com/cloudwatch/">Cloud Watch</a>
            <p>
              Amazon CloudWatch is a monitoring and management service that
              provides data for AWS, hybrid, and on-premises applications and
              infrastructure resources. Amazon describes it as “a monitoring and
              observability service built for DevOps engineers.”
            </p>
          </li>
          <li>
            <a href="https://searchcloudcomputing.techtarget.com/definition/cloud-management?utm_source=google&int=off&pre=off&utm_medium=cpc&utm_term=GAW&utm_content=sy_lp09232021GOOGOTHR_GsidsCloudComputing_VMWare_Essential_IO158077_LI2420281&utm_campaign=VMWare_EG_sCC_Intl&Offer=sy_lp09232021GOOGOTHR_GsidsCloudComputing_VMWare_Essential_IO158077_LI2420281">
              App Dynamics Cloud
            </a>
            <p>
              AppDynamics is an application performance management and IT
              operations analytics company based in San Francisco.
            </p>
          </li>
          <li>
            <a href="https://www.bmc.com/it-solutions/truesight.html">
              Trusight pluse
            </a>
            <p>
              TrueSight Pulse is a SaaS solution for real-time monitoring and
              alerting that watches streaming metrics from web-scale
              applications and underlying cloud and on-premises infrastructure
              to deliver extreme agility and scalability.
            </p>
          </li>

          <li>
            <a href="https://stackify.com/retrace/">Retrace</a>
            <p>
              Retrace gives developer teams visibility to critical application
              performance and uncovers problems in your application so your team
              can be more productive.
            </p>
          </li>
          <li>
            <a href="https://sematext.com/?t=c%3A14491337973%2Cg%3A129566704791%2Cl%3A20457%2Cm%3Ap%2Cn%3Ag%2Cd%3Ac%2Cdm%3A%2Ccr%3A543045533912%2Ck%3Asematext&utm_term=sematext&utm_campaign=S_Brand%20Protect%20%28India%29&utm_source=adwords&utm_medium=ppc&hsa_acc=7389392572&hsa_cam=11244575174&hsa_grp=129566704791&hsa_ad=543045533912&hsa_src=g&hsa_tgt=kwd-314048221358&hsa_kw=sematext&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLXMdpqvHg9haKNz87FwoWPKEtgKHUIrZ89dYg3QdldmYt7y47FnU0UaAroYEALw_wcB">
              Sematext
            </a>
            <p>
              Sematext Cloud is an all-in-one infrastructure performance and log
              monitoring, real user, frontend, API, website, and uptime
              monitoring SaaS.
            </p>
          </li>
          <li>
            <a href="https://www.aternity.com/">Aternity</a>
            <p>
              Aternity Inc. is an enterprise software company headquartered in
              Cambridge, MA with offices around the world.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CloudEngineer;
