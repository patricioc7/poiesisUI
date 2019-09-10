import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Row>
      <Col>
        <Navbar variant="light" className="main-navbar">
          <Navbar.Brand href="#home">Poiesis Arte Joven</Navbar.Brand>
          <Nav className="mr-auto" />
          <Nav.Link href="#home">Login</Nav.Link>
          <Button variant="outline-primary" onClick={() => setModalShow(true)}>Registrate</Button>
        </Navbar>
      </Col>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Row>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registrate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Completá con tus datos:</h4>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre Apellido" />
          </Form.Group>
          <Form.Group controlId="formBasicNick">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Usuario" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="asd@asd.com" />
            <Form.Text className="text-muted">
              Por favor ingresá un email válido, te enviaremos un enlace de
              activación de cuenta.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña1234" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Acepto Términos y Condiciones" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
