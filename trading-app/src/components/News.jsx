import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';



export default class News extends Component {
render() {
return (
  <div>
  <Image src="assets/pexels-photo-26681.jpg" className="header-image" />
  <Grid>
  <h2>News</h2>
    <Row>
      <Col xs={12} sm={8} className="main-section">
        <p> If you aren’t satisfied with the build tool and configuration choices, you can eject at any time.</p>
        <p>This command will remove the single build dependency from your project.</p>
      </Col>
      <Col xs={12} sm={4} className="sidebar-section">
        <Image src="assets/road-red-street-sign.jpg" />
        <p> If you aren’t satisfied with the build tool and configuration choices, you can eject at any time.</p>
        <p>This command will remove the single build dependency from your project.</p>
      </Col>
      </Row>
    </Grid>
  </div>
    )
  }
}
