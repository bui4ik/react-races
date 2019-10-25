import React from "react";
import { Switch, Route } from 'react-router';
import routes from '../config/routes';
import Racers from "../components/pages/users";
import UserDetailed from "../components/pages/user-detailed";

const Routes = () => (
  <Switch>
    <Route path={routes.users} exact component={Racers}/>
    <Route path={routes.userDetailed} exact component={UserDetailed} />
  </Switch>
);

export default Routes
