import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  return (
    <div>
      {/* Navbar */}
      <Navbar
        style={{
          background: "#29BB89",
          height: "125px",
          fontFamily: "concord",
        }}
      >
        <Container>
          <Navbar.Brand
            style={{
              fontSize: "32px",
              fontFamily: "concord",
              color: "#E6DD3B",
            }}
            href="/"
          >
            Animal Habitat
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Button
              variant="dark"
              onClick={() => history.push("/About")}
              style={{
                fontSize: "24px",
                fontFamily: "concord",
                background: "#29BB89",
                color: "#E6DD3B",
              }}
            >
              About
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
