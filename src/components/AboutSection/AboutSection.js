import React from 'react';
import { ReactSVG as SVG } from 'react-svg';
import { content } from './content';
import './style.css';

const AboutSection = () => {
	const { introParagraph, extendedBackground, university, universityHref, company, companyHref } = content;
	let styledText = content.backgroundParagraph.replace(university, universityHref).replace(company, companyHref);
	return (
		<div className="about">
			<div className="content">
				<SVG className={'about-svg'} src={'assets/svgs/undraw_about_me_wa29.svg'} />
				<div className="content-text">
					<p>{introParagraph}</p>
					<p dangerouslySetInnerHTML={{ __html: styledText }}></p>
					<p>{extendedBackground}</p>
					<p>{content.technologies.titleText}</p>
					<div className="tech-list">
						<ul>
							{content.technologies.techStack.map((t, i) => (
								<li key={i}>{t}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
