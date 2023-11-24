import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
        <strong className="purple" >Re</strong>feranslar
        </h1>

        <Techstack />
      </Container>
    </div>
  );
}

export default ResumeNew;
