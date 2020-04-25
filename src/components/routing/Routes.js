import React from '../../../node_modules/react';
import Find from '../bookingPage/Find';
import Booked from '../payingPage/Booked';
import BookCar from '../payingPage/BookCar';
import upcomingBookings from '../MobileViews/upcomingBookings';
import completeBookings from '../MobileViews/completeBookings';
import cancelledBookings from '../MobileViews/cancelledBookings';
import { Route, Switch } from '../../../node_modules/react-router-dom';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/find" component={Find} />
        <Route exact path="/book-car" component={BookCar} />
        <Route exact path="/booked" component={Booked} />
        <Route exact path="/upcoming-bookings" component={upcomingBookings} />
        <Route exact path="/complete-bookings" component={completeBookings} />
        <Route exact path="/cancelled-bookings" component={cancelledBookings} />
      </Switch>
    </section>
  );
};
export default Routes;
