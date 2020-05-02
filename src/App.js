import React from "react";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import MainSectionComponents from "./components/MainSectionComponents";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <MainSectionComponents />
      <footer>
        <HeaderNav isHeader={false} />
      </footer>
    </div>
  );
}

export default App;
