import React from "react";
import "./Homepage.css";
import businessImage from "../../images/business.jpg"

const Homepage = () => {
return(
  <div>
    <div>
    <img src={businessImage} className="businessImage"></img>
       <div className="topleft">
        <h4>
            At Prolific Tax we offer an easy solution to filing your 
            taxes so you don't have to. Additionally, we can provide 
            useful information to improve your financial literacy 
            and help you keep your money where it should be... 
            in your pocket! Stop worrying about your taxes, we've got 
            your back!
        </h4>
        </div>
    </div>
    <div className="contact-info">
        <h2>Contact Information</h2>
        <h3><i className="fa fa-phone"/><a href="tel:4079172958"> (407) 917-2958</a></h3>
        <h3><i class="fa-regular fa-envelope"/><a href="Mailto:prolifictaxesllc@gmail.com"> prolifictaxesllc@gmail.com</a></h3>
        <h3><i className="fa-brands fa-instagram"/><a href="http://www.instagram.com/prolifictax_"> prolifictax_</a></h3>
    </div>
  </div>
  )
}

export default Homepage;