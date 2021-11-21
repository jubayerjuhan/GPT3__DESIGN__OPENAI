import React from "react";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import shopify from "../../assets/shopify.png";
import dropbox from "../../assets/dropbox.png";
import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding ">
      <div className="gpt3__brand-logo">
        <img src={google} alt="" />
      </div>
      <div className="gpt3__brand-logo">
        <img src={slack} alt="" />
      </div>
      <div className="gpt3__brand-logo">
        <img src={atlassian} alt="" />
      </div>
      <div className="gpt3__brand-logo">
        <img src={dropbox} alt="" />
      </div>
      <div className="gpt3__brand-logo">
        <img src={shopify} alt="" />
      </div>
    </div>
  );
};

export default Brand;
