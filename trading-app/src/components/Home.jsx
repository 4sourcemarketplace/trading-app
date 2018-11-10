import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
render() {
return (
  <Grid>
    <Jumbotron>
    <h2> Welcome to the Trading App </h2>
    <p> Where Managers can Trade, Complete, and Clear Orders</p>
    <Link to="/orders">
    <Button bsStyle="primary">Recent Trades</Button>
      </Link>
    </Jumbotron>
    <Row className="show-grid text-center">

      <Col xs={12} sm={4} className="person-wrapper">
        <Image src="assets/download-2.jpg" className="profile-pic" />
        <p> Ad Lorem Ipsum Ad Lorem Ipsum Ad Lorem Ipsum </p>
        </Col>

        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/download-1.jpg" className="profile-pic" />
          <p> Ad Lorem Ipsum Ad Lorem Ipsum Ad Lorem Ipsum </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="download.jpg" className="profile-pic" />
            <p> Ad Lorem Ipsum Ad Lorem Ipsum Ad Lorem Ipsum </p>
            </Col>

        </Row>
  </Grid>
    )
  }
}
