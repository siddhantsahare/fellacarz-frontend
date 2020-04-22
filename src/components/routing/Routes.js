import React from '../../../node_modules/react';
import Find from '../bookingPage/Find';
import Car from '../payingPage/Car';
import { Route, Switch } from '../../../node_modules/react-router-dom';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/find" component={Find} />
        <Route exact path="/book-car" component={Car} />
      </Switch>
    </section>
  );
};

export default Routes;
