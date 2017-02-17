import React, { Component } from 'react';
import Navigation from './components/Navigation';
import CurrentConditions from './components/CurrentConditions';
import SevenDay from './components/SevenDay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <CurrentConditions />
          <SevenDay />
        </div>
      </div>
    );
  }
}
export default App;
