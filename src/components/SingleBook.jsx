import "./AlltheBooks.css";
import { Card } from "react-bootstrap";
const SingleBook = (props) => {
  return (
    <Card className="Sizecard">
      <Card.Img className="img-fluid" variant="top" src={props.copertina} />
      <Card.Body>
        <Card.Title>{props.titolo}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
