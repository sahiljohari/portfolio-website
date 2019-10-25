import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import IntroSection from './components/IntroSection/IntroSection';
import './App.css';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => setSideDrawerOpen(!sideDrawerOpen);
  const backdropShowHandler = () => setSideDrawerOpen(false);
  return (
    <div className="App">
      <HeaderNav drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen &&
        <BackDrop click={backdropShowHandler} />
      }
      <main style={{marginTop: "3rem"}}>
        <IntroSection />
      </main>
    </div>
  );
}

export default App;
