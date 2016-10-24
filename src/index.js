import './shared/styles/manifest.styl';

import { render } from 'react-dom';
import React from 'react';
import Root from './root';
import store from './store';

render(
  <Root store={store} />,
  document.getElementById('app')
);
