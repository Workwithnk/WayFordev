import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "../../CSS/ApiLoader.css";

function ApiLoader() {
  return (
    <div className="ApiLoader">
      <BeatLoader size={16} margin={5} color={"#192a56"} />
    </div>
  );
}

export default ApiLoader;
