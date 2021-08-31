import React, { Fragment } from "react";
import WorkCard from "./WorkCard";
import { content } from "./content";
import "./style.css";

const WorkSection = () => {
  const { sectionTitle, workExperience } = content;
  return (
    <div className="work">
      <div className="work-content">
        <h2 className="work-section-title">{sectionTitle}</h2>
        {Object.entries(workExperience)
          .sort((a, b) => b[0] - a[0])
          .map((exp, i) => (
            <Fragment key={i}>
              <WorkCard workData={exp} />
              {i !== workExperience.length - 1 && <hr />}
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default WorkSection;
