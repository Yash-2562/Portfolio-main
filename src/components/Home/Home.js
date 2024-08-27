import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import laptopImg from "../../Assets/about.png";

function Home() {
  return (
    <div>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There ! &nbsp;
                I'M
                <strong className="purple"> YASH </strong>
              </h1>
              <div  style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
            >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
  
                </div>
  );
}

export default Home;
