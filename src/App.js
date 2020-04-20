import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/homePage/Navbar/Navbar';
import Home from './components/homePage/Home';
import Routes from './components/routing/Routes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <br />

        <div class="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Routes} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
