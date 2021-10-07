import React from "react";
import { content } from "./content";
import "./style.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import Testimonials from "../Testimonials/Testimonials";
import AboutSection from "../AboutSection/AboutSection";

const IntroSection = () => {
  return (
    <>
      <div className="intro">
        <div className="left-column">
          <div className="intro-title">
            <div className="greeting">{content.greeting}</div>
            <div className="intro-text">
              {content.introText}
              <span>{content.firstName}</span>
            </div>
          </div>
          <div
            className="intro-description"
            dangerouslySetInnerHTML={{ __html: content.description }}
          ></div>
          <div className="buttons">
            <SocialLinks />
            <button
              onClick={() =>
                window.open(
                  "assets/resume.pdf",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              className="button-download"
            >
              {content.buttonTitle}
            </button>
          </div>
        </div>
      </div>
      <AboutSection />
      <Testimonials />
    </>
  );
};

export default IntroSection;
