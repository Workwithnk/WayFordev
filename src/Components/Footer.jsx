import React from "react";

const footer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#192a56",
  color: "white",
  padding: "10px 0px",
  fontSize: "20px",
  fontFamily: "sans-serif",
  letterSpacing: "2px",
  fontWeight: "100",
};

function Footer() {
  return (
    <div style={footer}>
      <h3>Powerd by WayForDev</h3>
    </div>
  );
}

export default Footer;
