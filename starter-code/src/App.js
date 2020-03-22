import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import PageDisplay from './components/CountriesDisplay';
import Nabvar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Nabvar />
      <PageDisplay />
    </div>
  );
}

export default App;
