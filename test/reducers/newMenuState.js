'use strict'

let tape = require('tape');
let newMenuState = require('../../reducers/newMenuState');

let initialState = false;

test('Testing toggle functionality of newMenuState', t => {

  var state = newMenuState(initialState, {});
  t.equal(state, false, "The menu's state should initially be turned off (false)");

  var state = newMenuState(false, {type: 'TOGGLE'});
  t.equal(state, true, "After the TOGGLE action is applied, the state should change to true");

  t.end();
});