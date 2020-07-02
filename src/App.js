import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/HeaderNav/HeaderNav';
import { routes } from './routes';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<HeaderNav />
				<Switch>
					{routes.map(route => (
						<Route key={route.path} path={route.path} exact component={route.component} />
					))}
				</Switch>
			</Router>
			<footer>
				<HeaderNav isHeader={false} />
			</footer>
		</div>
	);
}

export default App;
