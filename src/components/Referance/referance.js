import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";


function ResumeNew() {

  return (
    <div className="referencesAllContainer">
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
