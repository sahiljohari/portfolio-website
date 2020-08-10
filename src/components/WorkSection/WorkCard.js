import React from 'react';

const WorkCard = ({ workData }) => {
	const { company, role, period, location, logo, responsibilities, tags } = workData;

	return (
		<div className="work-card">
			<div className="company-logo">
				<img src={logo} alt={company} />
			</div>
			<div className="company-title">{company}</div>
			<div className="work-role">
				<strong>
					{role},{period}
				</strong>
			</div>
			<div className="company-location">
				<strong>{location}</strong>
			</div>
			<div className="tags">
				{tags.map((tag, idx) => (
					<div key={idx} className="tag">
						{tag}
					</div>
				))}
			</div>
			<div className="responsibilities" dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
		</div>
	);
};

export default WorkCard;
