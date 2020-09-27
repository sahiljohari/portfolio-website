import React from "react";
import { content } from "./content";
import "./style.css";

const AboutSection = () => (
  <div className="about">
    <div className="content">
      <div className="picture-frame">
        <img
          className="picture"
          src="assets/images/me.png"
          alt="Sahil Johari"
        />
      </div>
      <div className="content-text">
        <div dangerouslySetInnerHTML={{ __html: content.aboutText }}></div>
      </div>
    </div>

    <div className="extended-content">
      <div
        dangerouslySetInnerHTML={{ __html: content.extendedAboutText }}
      ></div>
      <p>{content.technologies.titleText}</p>
      <div className="tech-list">
        <ul>
          {content.technologies.techStack.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default AboutSection;
