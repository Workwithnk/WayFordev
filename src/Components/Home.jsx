import React from "react";
import Way from "../images/wayWithGirl.png";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="Home" id="home">
      <div className="second_Home">
        <img src={Way} alt="image" />
      </div>
      <div className="first_Home">
        <p>
          The skills is not difficult to achieve but the way to achieve that
          skill is difficult .
        </p>
        <p>So , here i am . Find your skill and get your way from here .</p>
      </div>
    </div>
  );
}

export default Home;
