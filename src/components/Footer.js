import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div>
      {/* Footer */}
      <div
        style={{
          padding: "1rem",
          background: "#E6DD3B",
          marginTop: "55px",
          width: "100%",
        }}
      >
        <Row className=" mt-4  mb-5 " style={{ marginLeft: "20%" }}>
          <Col>
            <a
              href="https://www.linkedin.com/in/jason-rouss-7a8129190/"
              style={{
                color: "#29BB89",
                textDecoration: "none",
              }}
            >
              <FaLinkedin style={{ fontSize: "39px" }} />
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/jasonrouss"
              style={{
                color: "#29BB89",
                textDecoration: "none",
              }}
            >
              <FaGithub style={{ fontSize: "39px" }} />
            </a>
          </Col>
          <Col>
            <a
              href="mailto:jasonrouss@gmail.com"
              style={{
                color: "#29BB89",
                textDecoration: "none",
              }}
            >
              <SiGmail style={{ fontSize: "39px" }} />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
