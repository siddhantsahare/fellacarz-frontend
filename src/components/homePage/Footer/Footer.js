import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// icons
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export class Footer extends Component {
  render() {
    return (
      <footer class="app-footer">
        <ul>
          <Link to="/">
            <li>
              <HomeIcon />
              Home
            </li>
          </Link>

          <Link to="/upcoming-bookings">
            <li>
              <CalendarTodayIcon />
              Booking
            </li>
          </Link>
          <li>
            <LocalOfferIcon />
            Offers
          </li>
          <li>
            <AccountBoxIcon />
            Account
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
