import React from 'react';
import Header from '../src/components/Header'
import TinderCards from '../src/components/TinderCards'
import './App.css';

function App() {
  return (
    // BEM class naming
    <div className="app">
      <Header />
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
