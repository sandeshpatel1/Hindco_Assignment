import React from "react";
import './Footer.css'; // Import CSS for styling
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur .</p>
          
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            adipiscing elit</p>
          <button className="footer-button">Learn More</button>
        </div>
        <div className="footer-column section2">
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit.</p>
          <h4>Services</h4>
          <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
    
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <FaInstagram color="black" size={24}/>
            <FaFacebook color="black" size={24}/>
            <FaTwitter color="black" size={24}/>
            <FaLinkedin color="black" size={24}/>
          </div>
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <FaInstagram color="black" size={24}/>
            <FaFacebook color="black" size={24}/>
            <FaTwitter color="black" size={24}/>
            <FaLinkedin color="black" size={24}/>
          </div>
        </div>
        
      </div>
      <div className="footer-row">
        
        
      </div>
      <div className="footer-bottom">
        <p className="contributors">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt.</p>
        <p className="all-rights">All Rights Reserved &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
