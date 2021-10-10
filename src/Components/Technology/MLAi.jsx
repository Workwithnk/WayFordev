import React from "react";
import { FaJava } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { SiCplusplus, SiJavascript, SiPython, SiScala } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "../../CSS/Comman.css";
import { rData } from "../../Data/DataSci";
import { cplusplusData } from "../../Data/GameDevData";
import { scalaData } from "../../Data/MLAIData";
import { javaData, pythonData } from "../../Data/MobileApp";
import { jsData } from "../../Data/webDevData";

function MLAi() {
  React.useEffect(() => {
    document.title = "WayForDev | ML/AI";
  }, []);
  return (
    <div className="BackToTop">
      <div className="comman_Header BackToTop">
        <NavLink className="comman_BackLink" to="/allWays">
          Back
        </NavLink>
        <h1>ML / AI</h1>
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
        {rData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <MdLanguage className=" cssIcon Comman_Icon" />
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
                    <a href={data.links.Datacamp}>Datacamp</a>
                  </li>
                  <li>
                    <a href={data.links.Tutorialspoint}>Tutorialspoint</a>
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
        {scalaData.map((data) => {
          return (
            <div className="skill_CH" key={data.id}>
              <SiScala className=" htmlIcon Comman_Icon" />
              <div className="details_Skill_CH">
                <h1> {data.name}</h1>
                <h3> {data.fullform}</h3>
                <ul>
                  <li>
                    <a href={data.links.Scala}>Scala</a>
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
            <a href="https://www.tensorflow.org/">Tensor Flow</a>
            <p>
              TensorFlow is a free and open-source software library for machine
              learning and artificial intelligence.
            </p>
          </li>
          <li>
            <a href="https://www.cs.waikato.ac.nz/ml/weka/">Weka</a>
            <p>
              Weka is a collection of machine learning algorithms for data
              mining tasks. It contains tools for data preparation,
              classification, regression, clustering, association rules mining,
              and visualization.
            </p>
          </li>
          <li>
            <a href="https://www.knime.com/">Knime</a>
            <p>
              KNIME, the Konstanz Information Miner, is a free and open-source
              data analytics, reporting and integration platform. KNIME
              integrates various components for machine learning and data mining
              through its modular data pipelining "Building Blocks of Analytics"
              concept.
            </p>
          </li>
          <li>
            <a href="https://colab.research.google.com/?utm_source=scs-index">
              Google Colab
            </a>
            <p>
              Colab is a Jupyter notebook environment that runs in the browser
              using Google Cloud.
            </p>
          </li>
          <li>
            <a href="https://mahout.apache.org/">Apache Mahout</a>
            <p>
              Apache Mahout is a project of the Apache Software Foundation to
              produce free implementations of distributed or otherwise scalable
              machine learning algorithms focused primarily on linear algebra.
            </p>
          </li>
          <li>
            <a href="https://keras.io/">Keras.io</a>
            <p>
              Keras is an open-source software library that provides a Python
              interface for artificial neural networks.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MLAi;
