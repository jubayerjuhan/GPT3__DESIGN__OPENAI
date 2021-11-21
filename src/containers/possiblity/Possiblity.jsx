import React from "react";
import "./possiblity.css";
import possiblity from "../../assets/possiblity.png";

const Possiblity = () => {
  return (
    <div className="gpt3__possiblity section__margin">
      <div className="gpt3__possiblity-image">
        <img src={possiblity} alt="possiblity" />
      </div>
      <div className="gpt3__possiblity-infoContainer">
        <p className="small-HeadingTop">Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="text ">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="pinkish__text">Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Possiblity;
