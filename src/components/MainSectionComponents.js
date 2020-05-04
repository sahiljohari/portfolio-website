import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import AboutSection from "./AboutSection/AboutSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import BackToTopButton from "./common/BackToTopButton/BackToTopButton";

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
      component: BackToTopButton,
      props: {
        showAt: 200,
        speed: 300,
        children: "▲",
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
