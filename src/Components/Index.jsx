import React from "react";
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
    </div>
  );
}

export default Index;
