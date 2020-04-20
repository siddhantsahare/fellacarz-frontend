import React, { Component } from '../../../../node_modules/react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer class="app-footer">
        <ul>
          <li>
            <i class="fa fa-heart"></i>
            Home
          </li>
          <li>
            <i class="fa fa-barcode"></i>
            Booking
          </li>
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
