import { Container, Image, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardA from "./CardArt";
import CardQ from "./CardQNA";

function Main() {
  return (
    <div>
      {/* Banner */}
      <div className="mt-4">
        <img
          src="https://live.staticflickr.com/65535/51409199657_804be68558_h.jpg"
          width="100%"
          height="auto"
          alt="pexels-sebastian-coman-travel-3448793 (1)"
        />
      </div>
      {/* Recent Articles */}
      <h2 className="mt-4 ms-5 mb-2">Recent Articles</h2>
      <Row xs={12} md={3} className="g-4 ">
        <Col>
          <CardA
            imgURL="https://live.staticflickr.com/65535/51411538735_48842c3cc2_m.jpg"
            cTitle="Fun facts about cats"
            cText="Two hundred feral cats prowl the park at Disneyland, doing their part to control rodents — the ones who don’t wear funny outfits and speak in squeaky voices."
          />
        </Col>

        <Col>
          <CardA
            imgURL="https://live.staticflickr.com/65535/51411540075_1a75e6b306_m.jpg"
            cTitle=" Some birds can mimic humans!"
            cText="You might already know that parrots can mimic what we say.

            Crows and ravens can also do it… although wild ones haven’t had much practice.
           "
          />
        </Col>
        <Col>
          <CardA
            imgURL="https://live.staticflickr.com/65535/51411536840_1b4babb572_m.jpg"
            cTitle="Cats and Dogs relationship"
            cText="By nature, dogs are predators and often chase things smaller than them—including cats. However, this doesn’t mean that dogs and cats are not able to live in harmony. "
          />
        </Col>
      </Row>
      {/* Animals Category */}
      <h2 className="mt-5 ms-5 mb-2" style={{ margin: "125px !important" }}>
        Animals
      </h2>

      <Row
        xs={12}
        md={3}
        className="g-4 mt-4  ms-5"
        style={{ marginBottom: "75px" }}
      >
        <Col>
          <Image
            style={{ height: "235px", width: "235px", border: "black" }}
            src="https://live.staticflickr.com/65535/51411573135_71a00cd39f_m.jpg"
            roundedCircle
          />
        </Col>

        <Col>
          <Image
            style={{ height: "235px", width: "235px", border: "black" }}
            src="https://live.staticflickr.com/65535/51410583636_ffd2170023_m.jpg"
            roundedCircle
          />
        </Col>
        <Col>
          <Image
            style={{ height: "235px", width: "235px", border: "black" }}
            src="https://live.staticflickr.com/65535/51409835182_f3d00814c8_m.jpg"
            roundedCircle
          />
        </Col>
      </Row>

      {/* Q&A */}
      <h2 className="ms-5 ">Reviews</h2>

      <Container md={12} className="g-4">
        <Col>
          <CardQ
            cTitle="Miss Cornell"
            cText="What a lovely website I enjoy browsing it with my grandkids in my free time."
          />
        </Col>

        <Col>
          <CardQ
            cTitle="Mr Smith"
            cText="Great design , beautiful layout althoutght a bit simplistic but it has all the components for a great website "
          />
        </Col>
        <Col>
          <CardQ
            cTitle="My Mom"
            cText="I am very proud of my son for his hard work and dedication , if he continue in that path he will have a very successful life "
          />
        </Col>
      </Container>
    </div>
  );
}

export default Main;
