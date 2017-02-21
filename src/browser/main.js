import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App.react';
import createStore from '../common/store';

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App.react', () => {
    render(App);
  });
}
