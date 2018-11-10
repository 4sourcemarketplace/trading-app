import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
render() {
return (
  <Navbar default collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to="/">Trading App</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} componentClass={Link} href="/" to="/">
      Home
      </NavItem>
      <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
      About
      </NavItem>
      <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
      News
      </NavItem>
      <NavItem eventKey={4} componentClass={Link} href="/orders/new" to="/orders/new">
      New Order
      </NavItem>
      <NavItem eventKey={5} componentClass={Link} href="/orders" to="/orders">
      All Orders
      </NavItem>
      <NavItem eventKey={6} componentClass={Link} href="/orders/test" to="/orders/test">
      All Orders (test)
      </NavItem>


      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}
