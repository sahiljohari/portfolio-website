import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LoadingSpinner from './components/common/LoadingSpinner/LoadingSpinner';
import { routes } from './routes';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Suspense fallback={<LoadingSpinner isLoading={true} />}>
					<NavBar />
					<Switch>{routes.map(route => route.access && <Route key={route.path} path={route.path} exact component={route.component} />)}</Switch>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
