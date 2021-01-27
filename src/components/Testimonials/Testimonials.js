import React from "react";
import { content, sectionTitle } from "./content";
import "./style.css";

const Testimonials = () => {
  return (
    <>
      <h2 className="testimonialSectionTitle">{sectionTitle}</h2>
      <div className="testimonials">
        {content.map((card) => (
          <div className="testimonialCard" key={card.id}>
            <div className="leftSection">
              <div className="displayImg">
                <img src={card.image} alt={card.name} />
              </div>
              <div className="info">
                <div className="name">
                  <a
                    href={card.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.name}
                  </a>
                </div>
                <div className="profession">{card.profession}</div>
              </div>
            </div>
            <div className="rightSection">
              <q className="highlight">{card.highlight}</q>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
