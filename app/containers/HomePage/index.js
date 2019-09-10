/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../App/MainTags/header';
import SideNav from '../App/MainTags/sideNav';
import Footer from '../App/MainTags/footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Row>
        <Col className="main-sidenav" md={1} xs={1}>
          <SideNav />
        </Col>
        <Col md={8} xs={6}>
          Contenido
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
