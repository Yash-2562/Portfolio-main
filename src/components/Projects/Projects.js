import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";

import reactapp from "../../Assets/Projects/proj5.png";
import userPost from "../../Assets/Projects/proj4.png";
import portfolio1 from "../../Assets/Projects/port.png";
import onlinestore from "../../Assets/Projects/store.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
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
              imgPath={portfolio1}
              isBlog={false}
              title="Portfolio"
              description="Simple Portfolio build with React js and Tailwind css showcasing my professional career and Techstack. With fully responsiveness it makes more compatible  with any devices."
              ghLink="https://github.com/Yash-2562/Portfolio-1"
              demoLink="https://portfolio28-res.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlinestore}
              isBlog={false}
              title="Online-store"
              description="This project is a frontend implementation of an eCommerce website built using React, Tailwind CSS. It provides users with a seamless dummy shopping experience, featuring product listing search functionality, cart management, and more."
              ghLink="https://github.com/Yash-2562/OnlineStore"
              demoLink="https://onlinestore28.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userPost}
              isBlog={false}
              title="Dummy-user"
              description="Made  a User Profile interface where where users can Create their post ,view details, and edit and delete them which also feature CRUD operations.
Technologies used : MongoDB is to store user data and Express.js is a Backend framework to create API endpoints and React.js is a Frontend library to build the user interface."
              ghLink="https://github.com/Yash-2562/OnlieStore"
              demoLink="https://onlinestore28.netlify.ap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactapp}
              isBlog={false}
              title="Text-utils"
              description="
TextUtils is a web application designed for processing and manipulating text. It offers various tools such as text transformation (e.g., converting text to uppercase, lowercase, counting characters and words The interface is usually straightforward, allowing users to input text and select the desired operations with ease."
               ghLink="https://github.com/Yash-2562/React-projects/tree/main/Textutils"
              demoLink="https://textutilsyp.netlify.app/"              
            />
          </Col>

  

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
