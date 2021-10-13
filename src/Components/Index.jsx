import React from "react";
import AllApiHome from "./AllApiHome";
import Home from "./Home";
import WaysSection from "./WaysSection";

function Index() {
  React.useEffect(() => {
    document.title = "WayForDev";
  }, []);
  return (
    <div id="top BackToTop">
      <Home />
      <WaysSection />
      <AllApiHome />
    </div>
  );
}

export default Index;
