import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';


function App() {
  //Header
  //Toolbar
  //Body 
  return (
    <div>
      <Header/>
      <div className="App" id="bruh">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Hi Edina
        </header>
      </div>
    </div>
  );
}

export default App;
