import React from "react";
import "./Header.css";
import companyLogo from '../../images/PROLIFICTAXICON.png'

const Header = () => {

    return(
        <div className="header-container">
            <div className="icon-container">
                <img src={companyLogo} className="icon"></img>
            </div>
            <div>
                <h1>
                Taxes done the
                <br></br>
                way it should be.
                </h1>
            </div>
        </div>
    )
}

export default Header;