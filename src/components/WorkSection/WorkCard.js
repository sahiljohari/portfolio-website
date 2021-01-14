import React from "react";

const WorkCard = ({ workData }) => {
  const { company, role, period, location, logo, responsibilities } = workData;

  return (
    <div className="work-card">
      <div className="word-card-head">
        <div className="company-logo">
          <img src={logo} alt={company} />
        </div>
        <div className="work-card-head-body">
          <div className="company-title">{company}</div>
          <div className="work-role">
            {role},{period}
          </div>
          <div className="company-location">{location}</div>
        </div>
      </div>
      <div
        className="responsibilities"
        dangerouslySetInnerHTML={{ __html: responsibilities }}
      ></div>
    </div>
  );
};

export default WorkCard;
