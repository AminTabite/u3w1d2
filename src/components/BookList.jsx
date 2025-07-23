import SingleBook from "./SingleBook";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Generelibri from "../assets/horror.json";
import "./AlltheBooks.css";
const bookList = (props) => {
  return (
    <Container>
      <Row className="justify-content-center m-4">
        {props.array.map((book) => (
          <Col xs={12} md={6} lg={4} className="mb-4">
            <SingleBook copertina={book.img} titolo={book.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default bookList;
