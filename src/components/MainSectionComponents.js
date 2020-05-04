import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import AboutSection from "./AboutSection/AboutSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import BackToTop from "react-back-to-top-button";

const MainSectionComponents = () => {
  const options = [
    {
      component: IntroSection,
    },
    {
      component: AboutSection,
    },
    {
      component: PortfolioSection,
    },
    {
      component: BackToTop,
      props: {
        showOnScrollUp: false,
        showAt: 200,
        speed: 300,
        children: "Back to top",
      },
    },
  ];

  const renderOptions = (options) =>
    options.map((option) => {
      const { component: Component, props } = option;
      if (Component) {
        return <Component {...props} />;
      }
      return null;
    });

  return <main>{renderOptions(options)}</main>;
};

export default MainSectionComponents;
