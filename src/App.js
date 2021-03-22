import './App.css';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import HomePage from './Components/HomePage/HomePage';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <MyNavbar />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
