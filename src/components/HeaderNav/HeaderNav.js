import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { logo } from './content';
import './style.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const HeaderNav = ({ drawerClickHandler }) => {
	return (
		<header className="navbar">
			<nav className="navbar__navigation">
				<>
					<Link className="logo" to="/" dangerouslySetInnerHTML={{ __html: logo }} />
					<div className="navbar__items">
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
				</>
				<DrawerToggleButton click={drawerClickHandler} />
			</nav>
		</header>
	);
};

export default HeaderNav;
