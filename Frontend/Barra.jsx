import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Brand href="#"><i class="fas fa-user-times"></i> Cerrar sesión</Navbar.Brand>
          <Navbar.Brand href="https://drive.google.com/file/d/12m-_g6zbSIUFZ_PtYe8mm-huWA14mJ5v/view?usp=sharing" target="_blank"><i class=""></i> Guía de uso</Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="ffcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Opciones </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown title="Registros" id="offcanvasNavbarDropdown" >
                  <NavDropdown.Item href="/registrovet"> Registro de veterinarios <i class="fas fa-user-circle"></i></NavDropdown.Item>
                  <NavDropdown.Item href="/registroventas"> Registro de ventas</NavDropdown.Item>
                  <NavDropdown.Item href="/registrousuario">Rgistro de usuarios</NavDropdown.Item>
                  <NavDropdown.Item href="/registroprovee"> Registro de proveedores</NavDropdown.Item>
                  <NavDropdown.Item href="/registroproduc"> Registro de productos</NavDropdown.Item>
                  <NavDropdown.Item href="/registromasc"> Registro de mascotas</NavDropdown.Item>
                  <NavDropdown.Item href="/registrocompras"> Registro de compras</NavDropdown.Item>
                  <NavDropdown.Item href="/registroclientes"> Registro de clientes</NavDropdown.Item>
                  <NavDropdown.Item href="/registrocitas"> Registro de citas</NavDropdown.Item>
                  <NavDropdown.Item href="/registrocateg"> Registro de categorias</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;