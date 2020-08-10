import React from 'react';
import { routes } from '../../routes';
import './style.css';

const SideDrawer = props => (
	<nav className={props.show ? 'side-drawer open' : 'side-drawer'}>
		<div>
			{routes.map((nav, i) => (
				<div key={i}>
					<a href={nav.path}>{nav.name}</a>
				</div>
			))}
		</div>
	</nav>
);

export default SideDrawer;
