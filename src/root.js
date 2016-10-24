import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import App from './modules/app';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about' },
    { path: 'services' },
    { path: 'work' },
    { path: 'blog' },
    { path: 'connect' }
  ]
};

const history = syncHistoryWithStore(browserHistory, store);

const Root = (props) =>
  <Provider store={props.store}>
    <Router history={history} routes={routes} />
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
