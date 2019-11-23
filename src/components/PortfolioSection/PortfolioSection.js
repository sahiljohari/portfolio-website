import React from "react";
import { content } from "./content";
import ProjectCard from "./ProjectCard";
import "./style.css";

const PortfolioSection = () => {
  const { sectionTitle, projects } = content;
  return (
    <div className="portfolio-container">
      <h2 className="sectionTitle">{sectionTitle}</h2>
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
