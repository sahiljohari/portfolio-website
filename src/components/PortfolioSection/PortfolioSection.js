import React from "react";
import { ReactSVG as SVG } from "react-svg";
import { content } from "./content";
import ProjectCard from "./ProjectCard";
import "./style.css";

const PortfolioSection = () => {
  const { sectionTitle, workExperience, projects } = content;
  return (
    <div className="portfolio-container">
      <h2 className="sectionTitle">{sectionTitle}</h2>
      <div className="work-experience-container">
        <SVG
          className={"portfolio-svg"}
          src={"assets/svgs/undraw_profile_6l1l.svg"}
        />
        <div className="work-experience-section">
          {workExperience.map((exp, i) => (
            <div className="work-exp-card">
              <div>
                <h3>{exp.company}</h3>
                <h4>{exp.role}</h4>
                <label>{exp.period}</label>
              </div>
              <p>{exp.responsibilities}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
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
