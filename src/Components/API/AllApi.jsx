import React, { useState, useEffect } from "react";
import { PUBLIC_API } from "../../URL";
import "../../CSS/AllApi.css";
import ApiLoader from "./ApiLoader";

function AllApi() {
  let [apiData, setApiData] = useState([]);
  let [selectVal, setSelectVal] = useState("Animals");

  const fetchData = async () => {
    let res = await fetch(`${PUBLIC_API}?category=${selectVal}`);
    let data = await res.json();
    setApiData(data.entries);
  };

  let getSelectVal = () => {
    let selectData = document.getElementById("selectTag").value;
    setSelectVal(selectData);
  };

  useEffect(() => {
    fetchData();
  }, [selectVal]);

  return (
    <div className="AllApi">
      <div className="categories_AllApi">
        <select id="selectTag" value={selectVal} onChange={getSelectVal}>
          <option value="Animals" defaultValue>
            Animals
          </option>
          <option value="Anime">Anime</option>
          <option value="Anti-Malware">Anti-Malware</option>
          <option value="Art & Design">Art & Design</option>
          <option value="Authentication">Authentication</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Books">Books</option>
          <option value="Business">Business</option>
          <option value="Calendar">Calendar</option>
          <option value="Cloud Storage & File Sharing">
            Cloud Storage & File Sharing
          </option>
          <option value="Continuous Integration">Continuous Integration</option>
          <option value="Cryptocurrency">Cryptocurrency</option>
          <option value="Currency Exchange">Currency Exchange</option>
          <option value="Data Validation">Data Validation</option>
          <option value="Development">Development</option>
          <option value="Dictionaries">Dictionaries</option>
          <option value="Documents & Productivity">
            Documents & Productivity
          </option>
          <option value="Environment">Environment</option>
          <option value="Events">Events</option>
          <option value="Finance">Finance</option>
          <option value="Food & Drink">Food & Drink</option>
          <option value="Games & Comics">Games & Comics</option>
          <option value="Geocoding">Geocoding</option>
          <option value="Government">Government</option>
          <option value="Health">Health</option>
          <option value="Jobs">Jobs</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Music">Music</option>
          <option value="News">News</option>
          <option value="Open Data">Open Data</option>
          <option value="Open Source Projects">Open Source Projects</option>
          <option value="Patent">Patent</option>
          <option value="Personality">Personality</option>
          <option value="Phone">Phone</option>
          <option value="Photography">Photography</option>
          <option value="Science & Math">Science & Math</option>
          <option value="Security">Security</option>
          <option value="Shopping">Shopping</option>
          <option value="Social">Social</option>
          <option value="Sports & Fitness">Sports & Fitness</option>
          <option value="Test Data">Test Data</option>
          <option value="Text Analysis">Text Analysis</option>
          <option value="Tracking">Tracking</option>
          <option value="Transportation">Transportation</option>
          <option value="URL Shorteners">URL Shorteners</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Video">Video</option>
          <option value="Weather">Weather</option>
        </select>
      </div>

      {apiData ? (
        <div className="apiAllDetails">
          {apiData.map((data, index) => {
            return (
              <div className="ApiCardContainer" key={index}>
                <h2>{data.API}</h2>
                <p>{data.Description}</p>
                <h5>Auth : {data.Auth ? data.Auth : "Not Required"}</h5>
                <h5>HTTPS : {data.HTTPS ? "Enabled" : "Disabled"}</h5>
                <h5>Cors : {data.Cors}</h5>
                <h5>Category : {data.Category}</h5>
                <a href={data.Link}>Link</a>
              </div>
            );
          })}
        </div>
      ) : (
        <ApiLoader />
      )}
    </div>
  );
}

export default AllApi;
