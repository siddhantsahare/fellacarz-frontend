import React from '../../../node_modules/react';
import Find from '../bookingPage/Find';
import Booked from '../payingPage/Booked';
import BookCar from '../payingPage/BookCar';
import UpcomingBookings from '../bookingFooterTab/MobileViews/UpcomingBookings';
import CompleteBookings from '../bookingFooterTab/MobileViews/CompleteBookings';
import CancelledBookings from '../bookingFooterTab/MobileViews/CancelledBookings';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/find" component={Find} />
        <Route exact path="/book-car" component={BookCar} />
        <Route exact path="/booked" component={Booked} />
        <Route exact path="/upcoming-bookings" component={UpcomingBookings} />
        <Route exact path="/complete-bookings" component={CompleteBookings} />
        <Route exact path="/cancelled-bookings" component={CancelledBookings} />
      </Switch>
    </section>
  );
};
export default Routes;
