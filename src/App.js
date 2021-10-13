import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllWays from "./Components/AllWays";
import Footer from "./Components/Footer";

import NavBar from "./Components/NavBar";
import FrontEnd from "./Components/Technology/FrontEnd";
import BackEnd from "./Components/Technology/BackEnd";
import FullStack from "./Components/Technology/FullStack";
import Android from "./Components/Technology/Android";
import IOS from "./Components/Technology/IOS";
import CrossPlate from "./Components/Technology/CrossPlate";
import DataSci from "./Components/Technology/DataSci";
import GameDev from "./Components/Technology/GameDev";
import UiUx from "./Components/Technology/UiUx";
import QualityAna from "./Components/Technology/QualityAna";
import DevOps from "./Components/Technology/DevOps";
import CloudEngineer from "./Components/Technology/CloudEngineer";
import BlockChain from "./Components/Technology/BlockChain";
import SecurityDev from "./Components/Technology/SecurityDev";
import MLAi from "./Components/Technology/MLAi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Index from "./Components/Index";
import MobileNav from "./Components/MobileNav";
import "./CSS/App.css";
import AllApi from "./API/AllApi";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App BackToTop">
      <BrowserRouter>
        <NavBar />
        <MobileNav />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/allWays" component={AllWays} />
          <Route path="/frontend" component={FrontEnd} />
          <Route path="/backend" component={BackEnd} />
          <Route path="/fullstack" component={FullStack} />
          <Route path="/android" component={Android} />
          <Route path="/ios" component={IOS} />
          <Route path="/crossplate" component={CrossPlate} />
          <Route path="/datascience" component={DataSci} />
          <Route path="/game" component={GameDev} />
          <Route path="/uiux" component={UiUx} />
          <Route path="/qualityanalyst" component={QualityAna} />
          <Route path="/devops" component={DevOps} />
          <Route path="/cloud" component={CloudEngineer} />
          <Route path="/securitydev" component={SecurityDev} />
          <Route path="/blockchain" component={BlockChain} />
          <Route path="/mlai" component={MLAi} />
          <Route path="/api" component={AllApi} />
          <Route component={ErrorPage} />
        </Switch>
        <div className="upArrowContainer">
          <Link
            style={{ cursor: "pointer" }}
            to="BackToTop"
            smooth={true}
            duration={1000}
          >
            <BsFillArrowUpCircleFill className="upArrowContainerIcon" />
          </Link>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
