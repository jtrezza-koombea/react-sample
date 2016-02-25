import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import Dashboard from '../components/Dashboard.jsx';

export default class extends React.Component {

  render(){
    return <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Dashboard} />
      </Route>
    </Router>;
  }
}