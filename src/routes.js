import IntroSection from './components/IntroSection/IntroSection';
import AboutSection from './components/AboutSection/AboutSection';
import WorkSection from './components/WorkSection/WorkSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

export const routes = [
	{
		path: '/',
		component: IntroSection,
		name: 'home',
		access: true
	},
	{
		path: '/about',
		component: AboutSection,
		name: 'about',
		access: true
	},
	{
		path: '/work',
		component: WorkSection,
		name: 'work',
		access: true
	},
	{
		path: '/portfolio',
		component: PortfolioSection,
		name: 'portfolio',
		access: true
	}
];
