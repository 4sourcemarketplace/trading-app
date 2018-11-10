import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
render() {
return (
  <div>
  <Image src="assets/pexels-photo-634010.jpg" className="header-image" />
    <Grid>
      <Col xs={12} sm={8} smOffset={2}>
      <Image src="assets/road-red-street-sign.jpg" className="about-profile-pic" rounded />
      <h3>Ad Lorem Ipsum</h3>
      <p>Ad Lorem Ad Lorem Ad Lorem Ad Lorem </p>
      </Col>
    </Grid>
  </div>
    )
  }
}
