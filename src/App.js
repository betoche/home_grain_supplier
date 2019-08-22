import React from 'react';
import './App.scss';
import Menu from './top-menu/Menu.js';
import MenuLateral from './MenuLateral.js';

function App() {
  return (
    <div className="App">
      <Menu modifiedTitle="Modified title"/>
      <MenuLateral/>
    </div>
  );
}

export default App;
