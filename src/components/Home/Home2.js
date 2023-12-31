import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              HAKKIMIZ<span className="purple">DA </span> 
            </h1>
            <p className="home-about-body">
              Lorem Ipsum
              <br />
              <br />Lorem Ipsum
              <i>
                <b className="purple"> Lorem Ipsum </b>
              </i>
              <br />
              <br />
              Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum &nbsp;
              <br />
              <br />
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum <b className="purple">Lorem Ipsums</b> and
              <i>
                <b className="purple">
                  {" "}
                  Lorem Ipsum
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Lorem Ipsum and Lorem Ipsum</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
