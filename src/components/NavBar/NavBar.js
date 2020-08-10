import React, { useState } from 'react';

import HeaderNav from '../HeaderNav/HeaderNav';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';

const NavBar = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => setSideDrawerOpen(!sideDrawerOpen);
	const backdropShowHandler = () => setSideDrawerOpen(false);

	return (
		<>
			<HeaderNav drawerClickHandler={drawerToggleClickHandler} />
			<SideDrawer show={sideDrawerOpen} />
			{sideDrawerOpen && <BackDrop click={backdropShowHandler} />}
		</>
	);
};

export default NavBar;
