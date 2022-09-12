import React from "react";
import "./Footer.css";
import companyLogo from '../../images/PROLIFICTAX.jpg';

const Footer = () => {
  return(
    <div className="logo-container">
    <div>
        <img src={companyLogo} className="logo"></img>
    </div>
    </div>
  )
}

export default Footer;