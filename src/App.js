import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Body />
      </div>
    );
  }
}

export default App;
