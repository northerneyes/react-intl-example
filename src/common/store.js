import {createStore, applyMiddleware} from 'redux';
import createLoggerMiddleware from 'redux-logger';

import rootReducer from './reducers';

export default function create(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(createLoggerMiddleware({
      collapsed: true
    }))
  );
}
