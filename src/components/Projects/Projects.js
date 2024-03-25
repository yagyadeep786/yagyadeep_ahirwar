import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codark from "../../Assets/codark.png";
import careerclimbhub from "../../Assets/careerclimbhub.png";
import filedrive from "../../Assets/filedrive.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codark}
              isBlog={false}
              title="Dark Pattern Detect Browser Extension: ( DPBH hackathon in IITBHU ) 2023"
              description="Used Pretrained model such as BERT, RoBERT, XLnet and detect dark.patterns
              present on e-commerce websites.
              Achieve 96% accuracy during Fine Tuning the BERT model.
              Made a user-friendly UI for the extension.
              Our team( Codark ) is a finalist of the DPBH 2023 with this project."
              ghLink="https://github.com/yagyadeep786/CoDark"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerclimbhub}
              isBlog={false}
              title="CareerClimbHub"
              description="It’s created by HTML,CSS and Javascript.It's generate the internship certificate in various fields,Send certificate through email. used google sheet and google docs"
              ghLink="https://github.com/yagyadeep786/careerclimbhub"
              demoLink="https://careerclimbhub.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filedrive}
              isBlog={false}
              title="FileDrive"
              description="It’s next js 13 web application, Used firebase to store data or files .Used Hyper UI for designing.Used clerk for use management and signin signup .Deployed on Vercel."
              ghLink="https://github.com/yagyadeep786/fileDrive"
              demoLink="https://file-drive-mu.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
