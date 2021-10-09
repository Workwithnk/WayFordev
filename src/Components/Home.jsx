import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="Home" id="home">
      <div className="iconConLeft_Home">
        <RiDoubleQuotesL className="homeSecIcon" />
      </div>
      <div className="first_Home">
        <p>
          The skills is not difficult to achieve but the way to achieve that
          skill is difficult .
        </p>
        <p>So , here i am . Find your skill and get your way from here .</p>
      </div>
      <div className="iconConRight_Home">
        <RiDoubleQuotesR className="homeSecIcon" />
      </div>
    </div>
  );
}

export default Home;
