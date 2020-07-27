import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { logo } from './content';
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
							<Link className="logo" to="/" dangerouslySetInnerHTML={{__html: logo}} />
							{routes
								.filter(nav => nav.access)
								.map((nav, i) => (
									<div className="nav__item" key={i}>
										<Link to={nav.path}>
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
