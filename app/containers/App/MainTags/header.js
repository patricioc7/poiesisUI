import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Header() {
  const [registerModalShow, setRegisterModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const logged = localStorage.getItem('access_token');
  return (
    <Row>
      <Col>
        <Navbar variant="light" className="main-navbar">
          <Navbar.Brand href="#home">Poiesis Arte Joven</Navbar.Brand>
          <Nav className="mr-auto" />
          <Nav.Link href="#home" onClick={() => setLoginModalShow(true)}>
            Login
          </Nav.Link>
          <Button
            variant="outline-primary"
            onClick={() => setRegisterModalShow(true)}
          >
            {logged} Registrate
          </Button>
        </Navbar>
      </Col>
      <RegisterModal
        show={registerModalShow}
        onHide={() => setRegisterModalShow(false)}
      />
      <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </Row>
  );
}

function RegisterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Registrate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Completá con tus datos:</h4>
        <Form onSubmit={register}>
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

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Completá con tus datos:</h4>
        <Form onSubmit={login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email o Usuario</Form.Label>
            <Form.Control
              name="username"
              type="email"
              placeholder="asd@asd.com"
            />
            <Form.Text className="text-muted">
              Por favor ingresá un email válido, te enviaremos un enlace de
              activación de cuenta.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Contraseña1234"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const login = async event => {
  const options = {
    headers: { 'Content-Type': 'application/json' },
  };
  event.preventDefault();
  const mail = event.target.elements.username.value;
  const pass = event.target.elements.password.value;

  const data = {
    email: mail,
    password: pass,
  };

  const LOGIN_ENDPOINT = '/api/login';

  try {
    const response = await axios.post(LOGIN_ENDPOINT, data, options);

    if (response.status === 200 && response.data) {
      localStorage.setItem('access_token', response.data.jwt);
      window.location.reload();
    }
  } catch (e) {
    console.log(e);
  }
};

const register = async data => {
  const SIGNUP_ENDPOINT = `http://localhost:8080/user/register`;
  try {
    const response = await axios({
      method: 'post',
      responseType: 'json',
      url: SIGNUP_ENDPOINT,
      data,
    });
  } catch (e) {
    console.log(e);
  }
};

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('expire_at');
};
