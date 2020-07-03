import React from 'react';
import { content, sectionTitle } from './content';
import './style.css';

const Testimonials = () => {
	return (
		<div className="testimonials">
			<h2 className="sectionTitle">{sectionTitle}</h2>
			{content.map(card => (
				<div className="testimonialCard" key={card.id}>
					<div className="leftSection">
						<div className="displayImg">
							<img src={card.image} alt={card.name} />
						</div>
						<div className="info">
							<div className="name">
								<a href={card.profile} target="_blank" rel="noopener noreferrer">
									{card.name}
								</a>
							</div>
							<div className="profession">{card.profession}</div>
						</div>
					</div>
					<div className="rightSection">
						<p className="testimonialText">{card.testimony}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Testimonials;
