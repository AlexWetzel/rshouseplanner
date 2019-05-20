import React from 'react';

import FloorPlan from './components/FloorPlan';
import SidePanel from './components/SidePanel';
import style from './App.module.css';
import PlayerSearch from './components/PlayerSearch/PlayerSearch';

function App() {
  return (
    <div className={`${style.App}`}>
      <PlayerSearch />
      <SidePanel />
      <FloorPlan />
    </div>
  );
}

export default App;
