import React from 'react';
import Nav from './Nav.jsx';
import TopBar from './TopBar.jsx';

export default class extends React.Component {


  render() {
    return <div className="main-container">
      <Nav></Nav>
      <div className="main-content">
        <TopBar></TopBar>
        <div className="main-content__content">{this.props.children}</div>
      </div>
    </div>;
  }
}