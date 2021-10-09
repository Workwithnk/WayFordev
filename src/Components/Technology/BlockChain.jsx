import React from "react";

function BlockChain() {
  React.useEffect(() => {
    document.title = "WayForDev | Blockchain";
  }, []);
  return (
    <div className="BackToTop">
      <h1>BlockChain</h1>
    </div>
  );
}

export default BlockChain;
