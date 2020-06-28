import React from "react";
import { ReactSVG as SVG } from "react-svg";
import { content } from "./content";
import ProjectCard from "./ProjectCard";
import "./style.css";

const PortfolioSection = () => {
  const { sectionTitle, workExperience, projects } = content;
  const showSvg = false;
  return (
    <div className="portfolio-container">
      <h2 className="sectionTitle">{sectionTitle}</h2>
      <div className="work-experience-container">
        {showSvg && (
          <SVG
            className={"portfolio-svg"}
            src={"assets/svgs/undraw_profile_6l1l.svg"}
          />
        )}
        <div className="work-experience-section">
          {workExperience.map((exp, i) => (
            <div className="work-exp-card" key={i}>
              <div className="work-exp-card-header">
                <h3 className="work-exp-company-name">{exp.company}</h3>
                <div className="work-exp-card-subheader">
                  <h4 className="work-exp-role-name">{exp.role}</h4>
                  <label>{exp.period}</label>
                </div>
              </div>
              <p>{exp.responsibilities}</p>
              <div className="tags">
                {exp.tags.map((tag, idx) => (
                  <div key={idx} className="tag">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <h2 className="subSectionTitle">My Projects</h2>
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
      </div>
    </div>
  );
};

export default PortfolioSection;
