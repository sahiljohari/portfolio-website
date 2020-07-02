import React from 'react';
import { content } from './content';
import './style.css';

const SocialLinks = ({ classname }) => {
	return (
		<div className={classname}>
			{content
				.filter(link => link.show)
				.map((link, i) => (
					<div className="link-icons" key={i}>
						<a href={link.url} target="_blank" rel="noopener noreferrer">
							<i className={link.type}></i>
						</a>
					</div>
				))}
		</div>
	);
};

export default SocialLinks;
