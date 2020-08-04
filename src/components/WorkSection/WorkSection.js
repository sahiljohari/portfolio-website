import React, { Fragment } from 'react';
import { ReactSVG as SVG } from 'react-svg';
import WorkCard from './WorkCard';
import { content } from './content';
import './style.css';

const WorkSection = () => {
	const { bannerText, sectionTitle, workExperience } = content;
	return (
		<div className="work">
			<div className="work-banner">
				<SVG className="work-svg" src={'assets/svgs/work-page-svg.svg'} />
				<div className="left-side" dangerouslySetInnerHTML={{ __html: bannerText }}></div>
			</div>
			<div className="work-content">
				<h2 className="work-section-title">{sectionTitle}</h2>
				{workExperience.map((exp, i) => (
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
