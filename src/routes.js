import { lazy } from 'react';

export const routes = [
	{
		path: '/',
		component: lazy(() => import('./components/IntroSection/IntroSection')),
		name: 'home',
		access: true
	},
	{
		path: '/about',
		component: lazy(() => import('./components/AboutSection/AboutSection')),
		name: 'about',
		access: true
	},
	{
		path: '/work',
		component: lazy(() => import('./components/WorkSection/WorkSection')),
		name: 'work',
		access: true
	},
	{
		path: '/portfolio',
		component: lazy(() => import('./components/PortfolioSection/PortfolioSection')),
		name: 'portfolio',
		access: true
	}
];
