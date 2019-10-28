import React from "react";
import { Switch, Route } from 'react-router';
import routes from '../config/routes';
import Users from "../components/pages/users";
import UserDetailed from "../components/pages/user-detailed";
import UserAdd from "../components/pages/user-add";

const Routes = () => (
  <Switch>
      <Route path={routes.userAdd} exact component={UserAdd}/>
      <Route path={routes.users} exact component={Users}/>
      <Route path={routes.userDetailed} exact component={UserDetailed} />
  </Switch>
);

export default Routes
