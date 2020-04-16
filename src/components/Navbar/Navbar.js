import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Navbar.css';
import './NavbarPopup.css';

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
            <a href="#">Book Now</a>
          </li>
          <li>
            <a href="#">Why Fellacarz</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <Popup
              trigger={<button className="auth">Login</button>}
              modal
              closeOnDocumentClick
            >
              {(close) => (
                <div className="modal">
                  <div className="actions">
                    <input
                      type="text"
                      class="email"
                      placeholder="Enter your email"
                    />
                    <input
                      type="password"
                      class="password"
                      placeholder="Enter a password"
                    />
                    <button class="auth-button">Login</button>
                    <br />
                    <p class="forgot-password">
                      Forgot Password -{' '}
                      <span className="auth-span">Reset now </span>
                    </p>
                    <br />
                    <p class="create-account">
                      Looking to -{' '}
                      <span className="auth-span">create an account </span>
                    </p>
                  </div>
                </div>
              )}
            </Popup>
          </li>
          <li>
            <Popup
              trigger={<button className="auth">Signup</button>}
              modal
              closeOnDocumentClick
            >
              {(close) => (
                <div className="modal">
                  <div className="actions">
                    <input
                      type="text"
                      class="name"
                      placeholder="Your Full Name"
                    />

                    <input
                      type="text"
                      class="email"
                      placeholder="Enter Email"
                    />

                    <input
                      type="text"
                      class="password"
                      placeholder="Enter Password"
                    />

                    <input
                      type="text"
                      class="phone-number"
                      placeholder="Enter your mobile number"
                    />
                    <button class="auth-otp">Send OTP</button>
                    <button class="auth-button">Register</button>

                    <p class="create-account">
                      Already have an account? -{' '}
                      <span className="auth-span">Login </span>
                    </p>
                  </div>
                </div>
              )}
            </Popup>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
