import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import { routes } from './routes';
import './App.css';

function App() {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => setSideDrawerOpen(!sideDrawerOpen);
	const backdropShowHandler = () => setSideDrawerOpen(false);
	return (
		<div className="App">
			<Router>
				<HeaderNav drawerClickHandler={drawerToggleClickHandler} />
				<SideDrawer show={sideDrawerOpen} />
				{sideDrawerOpen && <BackDrop click={backdropShowHandler} />}
				<Switch>{routes.map(route => route.access && <Route key={route.path} path={route.path} exact component={route.component} />)}</Switch>
			</Router>
		</div>
	);
}

export default App;
