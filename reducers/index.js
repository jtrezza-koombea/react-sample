import newMenuState from './newMenuState';
import userMenuState from './userMenuState';
import { combineReducers } from 'redux';

let reducers = {newMenuState, userMenuState};

export default combineReducers(reducers);