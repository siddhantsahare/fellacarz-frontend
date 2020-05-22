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
              <HomeIcon className="icons" />
              Home
            </li>
          </Link>

          <Link to="/upcoming-bookings">
            <li>
              <CalendarTodayIcon className="icons" />
              Booking
            </li>
          </Link>
          <li>
            <LocalOfferIcon className="icons" />
            Offers
          </li>
          <Link to="/account">
            <li>
              <AccountBoxIcon className="icons" />
              Account
            </li>
          </Link>
        </ul>
      </footer>
    );
  }
}

export default Footer;
