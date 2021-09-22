import React from "react";
import { content } from "./content";
import "./style.css";

const AboutSection = () => (
  <div className="about">
    <div className="content">
      <div className="picture-frame">
        <img
          className="picture"
          src="assets/images/new_me.jpeg"
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
    </div>
  </div>
);

export default AboutSection;
