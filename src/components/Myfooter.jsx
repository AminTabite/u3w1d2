import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Myfooter = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="#action2">
              all rights reserved - © Epibooks
            </Nav.Link>

            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Stay updated"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Subcribe!</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Myfooter;
