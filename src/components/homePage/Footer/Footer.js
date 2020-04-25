import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer class="app-footer">
        <ul>
          <Link to="/">
            <li>
              <i class="fa fa-heart"></i>
              Home
            </li>
          </Link>

          <Link to="/upcoming-bookings">
            <li>
              <i class="fa fa-barcode"></i>
              Booking
            </li>
          </Link>
          <li>
            <i class="fa fa-map-marker"></i>
            Offers
          </li>
          <li>
            <i class="fa fa-user"></i>
            Account
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
