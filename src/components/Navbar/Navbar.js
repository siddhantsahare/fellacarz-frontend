import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className="main-nav">
        <img
          src="https://i.ibb.co/wwLhz98/logo.png"
          alt="Fellacarz"
          className="logo"
        />
        <ul className="main-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fare Estimate</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <div className="dropdown">
            <button className="dropbtn"> Login </button>
            <div className="dropdown-content">
              <a href="#">Signup</a>
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
