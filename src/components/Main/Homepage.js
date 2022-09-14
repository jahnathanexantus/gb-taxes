import React from "react";
import "./Homepage.css";

const Homepage = () => {
return(
  <div>
    <div>
        <h4>
            At Prolific Tax we offer an easy solution to filing your 
            taxes so you don't have to. Additionally, we can provide 
            useful information to improve your financial literacy 
            and help you keep your money where it should be... 
            in your pocket! Stop worrying about your taxes, we've got 
            your back!
        </h4>
    </div>
    <div className="contact-info">
        <h2>Contact Information</h2>
        <h3><i className="fa fa-phone" /> (555) 456-7890</h3>
        <h3><i class="fa-regular fa-envelope"/> testbest@test.com</h3>
        <h3><i className="fa-brands fa-instagram" /> _taxguy33</h3>
    </div>
  </div>
  )
}

export default Homepage;