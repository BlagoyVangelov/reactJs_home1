import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Wrapper />
    </div>

  );
}

export default App;
