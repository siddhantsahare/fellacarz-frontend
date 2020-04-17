import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <Footer />
        <Search />
      </div>
    </div>
  );
}

export default App;
