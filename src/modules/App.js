import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import Product from './Product';

export default () => (
  <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:slug" component={Product} exact />
    <Redirect to="/" />
  </Switch>
);