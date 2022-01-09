import Footer from "../components/Footer";
import Header from "../components/Header";
import { Image, Col, Row } from "react-bootstrap";

function About() {
  return (
    <div>
      <Header />
      {/* Main */}
      <Row xs={12} md={3}>
        <Col>
          <Image
            style={{
              height: "270px",
              width: "270px",

              marginTop: "120px",
              marginBottom: "120px",
              marginLeft: "60px",
            }}
            src="https://live.staticflickr.com/65535/51411375583_aa069e7875_m.jpg"
            roundedCircle
          />
        </Col>
        <Col>
          <div
            style={{
              height: "270px",

              marginTop: "120px",
              marginBottom: "120px",
              marginLeft: "60px",
            }}
          >
            <h3 style={{ fontFamily: "helvatica" }}>
              A start for a great journey
            </h3>
            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                fontFamily: "roboto",
              }}
            >
              Founded on august 29/8/2021 , our creator goal was always to make
              responsive and modern websites. In this website he showcased his
              skills by building a well structured website about pets who
              doesn't love pets ? I hope you enjoyed your stay and cheers to
              more websites 🥂.
            </p>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default About;
