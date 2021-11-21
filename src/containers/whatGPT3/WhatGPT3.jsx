import React from "react";
import "./whatGPT3.css";
import Feature from "./../../components/feature/Feature";

const WhatGPT3 = () => {
  const features = [
    {
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments ",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];
  const feature1 = {
    title: "What is GPT3",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
  };
  return (
    <div className="gpt3__whatGPT3 section__margin">
      <div className="gpt3__whatGPT3-feature">
        <Feature title={feature1.title} text={feature1.text} />{" "}
        <div className="gpt3__whatGPT3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatGPT3-container">
          {features.map((feature, index) => (
            <Feature key={index} title={feature.title} text={feature.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
