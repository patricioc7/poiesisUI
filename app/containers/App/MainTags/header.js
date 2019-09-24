import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';

const loggedIn = !!localStorage.getItem('user');

export default function Header() {
  return (
    <Row>
      <Col>
        <Navbar variant="light" className="main-navbar">
          <Navbar.Brand href="#home">Poiesis Arte Joven</Navbar.Brand>
          <Nav className="mr-auto" />
          {!loggedIn && (
            <div>
              <Nav.Link href="/login">Login</Nav.Link>
              <a href="/register">
                <Button variant="outline-primary">Register</Button>
              </a>
            </div>
          )}
          {loggedIn && (
            <div>
              <Nav.Item>
                Bienvenido {JSON.parse(localStorage.getItem('user')).username}
              </Nav.Item>
              <Nav.Link href="/logout">Salir</Nav.Link>
            </div>
          )}
        </Navbar>
      </Col>
    </Row>
  );
}
