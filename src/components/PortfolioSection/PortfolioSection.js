import React from "react";
import { ReactSVG as SVG } from 'react-svg';
import { content } from "./content";
import ProjectCard from "./ProjectCard";
import "./style.css";

const PortfolioSection = () => {
  const { sectionTitle, projects } = content;
  return (
    <div className="portfolio-container">
      <div className="banner">
        <SVG src={'assets/svgs/undraw_maker_launch_crhe.svg'} className={'portfolio-svg'} />
        <div className="bannerQuote">{content.bannerQuote}
          <div className="bannerQuoteAuthor">{content.bannerQuoteAuthor}</div>
        </div>
      </div>
      <h2 className="sectionTitle">{sectionTitle}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            projectContent={project}
            className={"project-card"}
            key={project.projectId}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
