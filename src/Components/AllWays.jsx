import React from "react";
import { AllData } from "../Data/webDevData";
import { NavLink } from "react-router-dom";
import "../CSS/AllWays.css";

function AllWays() {
  React.useEffect(() => {
    document.title = "WayForDev | AllWays";
  }, []);
  return (
    <div className="AllData BackToTop">
      {AllData.map((data) => {
        return (
          <div key={data.id} className="cards_AllData">
            <img src={data.img} alt="AllData_image" />
            <div className="data_Card_AllData">
              <h3>{data.name}</h3>
              <NavLink to={data.pageLink}>start</NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllWays;
