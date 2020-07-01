import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageNew from './components/homePageNew/HomePageNew';
import Routes from './components/routing/Routes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Uses Line breaks because the Navbar is fixed and has low z-index */}
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={HomePageNew} />
          <div class="container">
            <Route component={Routes} />
          </div>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
