import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './style.css';

const SideDrawer = ({show, optionClick}) => (
	<nav className={show ? 'side-drawer open' : 'side-drawer'}>
		<div>
			{routes.map((nav, i) => (
				<div key={i}>
					<NavLink to={nav.path} onClick={optionClick}>{nav.name}</NavLink>
				</div>
			))}
		</div>
	</nav>
);

export default SideDrawer;
