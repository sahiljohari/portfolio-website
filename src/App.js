import React from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import IntroSection from "./components/IntroSection/IntroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <main>
        <IntroSection />
        <AboutSection />
        <PortfolioSection />
      </main>
    </div>
  );
}

export default App;
