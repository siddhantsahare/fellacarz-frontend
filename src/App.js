import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/homePage/Footer/Footer';
import Navbar from './components/homePage/Navbar/Navbar';
import Home from './components/homePage/Home';
import Routes from './components/routing/Routes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Uses Line breaks because the Navbar is fixed and has low z-index */}
        <br />
        <br />
        <br />
        <div class="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Routes} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
