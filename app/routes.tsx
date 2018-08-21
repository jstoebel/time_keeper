import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage'
import OtherPage from './containers/OtherPage';

export default () => (
  <App>
    <Switch>
      <Route path="/other" component={OtherPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
