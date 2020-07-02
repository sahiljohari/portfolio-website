import React from 'react';
import { Link } from 'react-router-dom';
import { content, logo } from './content';
import SocialLinks from '../SocialLinks/SocialLinks';
import './style.css';

const HeaderNav = ({ isHeader = true }) => {
	const mainStyle = isHeader ? 'navbar' : 'footer';
	const linksStyle = isHeader ? 'links-header' : 'links-footer';

	return (
		<header className={mainStyle}>
			<nav className="navbar__navigation">
				{isHeader && (
					<>
						<div className="navbar__items">
							<Link className="logo" to="/">
								{logo}
							</Link>

							{content
								.filter(nav => nav.show)
								.map((nav, i) => (
									<div className="nav__item" key={i}>
										<Link to={nav.url}>
											<p>{nav.name}</p>
										</Link>
									</div>
								))}
						</div>
						<div className="spacer" />
					</>
				)}
				<SocialLinks classname={linksStyle} />
			</nav>
		</header>
	);
};

export default HeaderNav;
