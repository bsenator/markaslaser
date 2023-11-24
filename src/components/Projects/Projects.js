import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dort from "../../Assets/Projects/dort.png";
import bir from "../../Assets/Projects/bir.png";
import uc from "../../Assets/Projects/uc.png";
import iki from "../../Assets/Projects/iki.png";
import bes from "../../Assets/Projects/bes.png";
import alti from "../../Assets/Projects/alti.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MarkasLazer  <strong className="purple">Hizmetlerimiz  </strong>
        </h1>
        <p style={{ color: "white" }}>
          Kalite bizim işimiz.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bir}
              title="2D Fiber Lazer Kesim"
              description="Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iki}
              title="Abkant Büküm"
              description="Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uc}
              title="Kaynak & Boya"
              description="Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dort}
              title="Punch"
              description="Punch ile imalat, bir tasarımın metal bir parçaya işlenmesi işlemine verilen genel ad. Bu işlem, bir kalıp ve bir punch (vurucu) aracılığıyla yapılır. Punch, tasarımın belirli bir şekline uygun olarak şekillendirilmiş bir metal parçadır."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bes}
              title="Fiber Lazer Kesim ve Boru Kesimi"
              description="Fiber Lazer Kesim Makinesi, boru (maksimum çap 170 mm) ve profil (maksimum kare 120x120 mm, dikdörtgen 150x100 mm) malzemelerin kesiminde kullanılan “ yüksek hızlı “ 2D ve 2.5D kesim tezgahıdır."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alti}
              title="Giyotin Kesim "
              description="Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
