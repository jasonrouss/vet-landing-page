import { Card } from "react-bootstrap";

function CardQ(props) {
  return (
    <div>
      <Card
        style={{
          background: "#29BB89",
          height: "160px",

          margin: "43px",
          width: "80%",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "26px", fontFamily: "helvatica" }}>
            {props.cTitle}
          </Card.Title>
          <Card.Text style={{ fontFamily: "roboto" }}>{props.cText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardQ;
