import Nav from 'react-bootstrap/Nav';
import React from 'react';

export default function SideNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Palabra</Nav.Link>
      <Nav.Link eventKey="link-1">Música</Nav.Link>
      <Nav.Link eventKey="link-2">Plástica</Nav.Link>
    </Nav>
  );
};
