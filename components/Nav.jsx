import React from 'react';
import NavItem from './NavItem.jsx'

export default class extends React.Component {

  render(){
    return (
      <div className="main-nav">
        <div className="logo">
          <span className="logo__text">ODC</span>
        </div>
        <div className="main-nav__list-items">
          <NavItem url="" icon="fa fa-tachometer" label="Inicio"></NavItem>
          <NavItem url="" icon="fa fa-users" label="Clientes"></NavItem>
          <NavItem url="" icon="fa fa-truck" label="Proveedores"></NavItem>
          <NavItem url="" icon="fa fa-black-tie" label="Empleados"></NavItem>
          <NavItem url="" icon="fa fa-tags" label="Inventarios"></NavItem>
          <NavItem url="" icon="fa fa-exchange" label="Transacciones"></NavItem>
          <NavItem url="" icon="fa fa-bar-chart" label="Reportes"></NavItem>
        </div>
      </div>
    );
  }
}

//TODO: settings go in user menu