import IntroSection from './components/IntroSection/IntroSection';
import AboutSection from './components/AboutSection/AboutSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

export const routes = [
	{
		path: '/',
		component: IntroSection
	},
	{
		path: '/about',
		component: AboutSection
	},
	{
		path: '/portfolio',
		component: PortfolioSection
	}
];
