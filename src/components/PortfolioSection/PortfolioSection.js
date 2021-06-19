import React from "react";
import { content } from "./content";
import Grid from "../common/Grid/Grid";
import Card from "../common/Card/Card";
import "./style.css";

const PortfolioSection = () => {
  const { sectionTitle, projects } = content;
  return (
    <div className="portfolio-container">
      <h2 className="portfolioSectionTitle">{sectionTitle}</h2>
      <Grid>
        {projects.map(
          ({
            projectId,
            projectName,
            projectSummary,
            externalLink,
            demoLink,
            thumbnail,
          }) => (
            <Card
              key={projectId}
              displayImg={thumbnail}
              title={projectName}
              description={projectSummary}
              externalLink={externalLink}
              demoLink={demoLink}
            />
          )
        )}
      </Grid>
    </div>
  );
};

export default PortfolioSection;
