import React from "react";
import { ReactSVG as SVG } from "react-svg";
import ArrowButton from "../common/ArrowButton/ArrowButton";
import { content } from "./content";
import "./style.css";

const IntroSection = () => {
  return (
    <div className="intro">
      <SVG
        src={"assets/svgs/undraw_web_developer_p3e5.svg"}
        className={"intro-svg"}
      />
      <div className="intro-title">
        <div className="greeting">{content.greeting}</div>
        <div className="intro-text">
          {content.introText}
          {content.firstName}
          <span>{content.lastName}</span>
        </div>
      </div>
      <div className="intro-description">{content.description}</div>
      <div className="buttons">
        <a
          href="assets/resume.pdf"
          target="_blank"
          className="button-download"
          rel="noopener noreferrer"
        >
          {content.buttonTitle}
        </a>
      </div>
      <ArrowButton />
    </div>
  );
};

export default IntroSection;
