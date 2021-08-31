import React from "react";

const WorkCard = ({ workData }) => {
  const [year, content] = workData;

  return (
    <div className="work-card">
      <h2>{year}</h2>
      {content.map(({ title, description }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
