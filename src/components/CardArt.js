import { Card } from "react-bootstrap";

function CardA(props) {
  return (
    <div>
      <Card
        style={{
          marginTop: "45px",
          marginLeft: "45px",
          marginBottom: "45px",
          width: "300px",
        }}
      >
        <Card.Img variant="top" src={props.imgURL} />
        <Card.Body>
          <Card.Title style={{ fontSize: "22px", fontFamily: "helvatica" }}>
            {props.cTitle}
          </Card.Title>
          <Card.Text style={{ fontFamily: "roboto" }}>{props.cText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardA;
