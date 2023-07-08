import React from "react";
import "./Footer.css";
import Wave from "../../Components/Assets/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
    </div>
  );
};

export default Footer;