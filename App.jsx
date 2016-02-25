import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes.jsx';
import reducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const logger = ({getState}) => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', getState())
  return result
};

const store = createStore(reducer, undefined, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('js-app'));