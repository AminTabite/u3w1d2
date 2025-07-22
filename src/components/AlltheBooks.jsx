import Generelibri from "../assets/horror.json";
import "./AlltheBooks.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Allthebooks = () => {
  return (
    <Container>
      <Row className="justify-content-center m-4">
        {Generelibri.map((libro) => (
          <Col key={libro.asin} xs={12} md={6} lg={4} className="mb-4">
            <Card className="Sizecard">
              <Card.Img className="img-fluid" variant="top" src={libro.img} />
              <Card.Body>
                <Card.Title>{libro.title}</Card.Title>
                <Card.Text>{libro.asin}</Card.Text>
                <Card.Text>{libro.category}</Card.Text>
                <Button variant="primary">{libro.price}€</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Allthebooks;
