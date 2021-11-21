import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
      <button>Request Early Access</button>

      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container-logoSection ">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-container__links">
          <h3>Links</h3>
          <div></div>
          <ul>
            <li>Overon</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="gpt3__footer-container__links">
          <h3>Company</h3>
          <div></div>
          <ul>
            <li>Overon</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="gpt3__footer-container__links">
          <h3>Get In Touch</h3>
          <div></div>
          <ul>
            <li>Overon</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
