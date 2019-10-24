import React from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import IntroSection from './components/IntroSection/IntroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <main style={{marginTop: "3rem"}}>
        <IntroSection />
      </main>
    </div>
  );
}

export default App;
