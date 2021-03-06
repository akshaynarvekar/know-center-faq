import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KnowCenter from './components/knowCenter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <KnowCenter />
      </div>
    );
  }
}

export default App;
