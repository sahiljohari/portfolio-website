import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './style.css';

const SideDrawer = props => (
	<nav className={props.show ? 'side-drawer open' : 'side-drawer'}>
		<div>
			{routes.map((nav, i) => (
				<div key={i}>
					<NavLink to={nav.path}>{nav.name}</NavLink>
				</div>
			))}
		</div>
	</nav>
);

export default SideDrawer;
