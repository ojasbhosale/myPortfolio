import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import expense from "../../Assets/Projects/expense.png"
import modulation from "../../Assets/Projects/modulation.png"
import suicide from "../../Assets/Projects/suicide.png";
import audiblescript from "../../Assets/Projects/audiblescript.png"

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
              imgPath={modulation}
              isBlog={false}
              title="Modulation Simulator"
              description="Built a signal visualization tool using React.js and Chart.js for real-time modulation scheme visualization. Deployed the app for educators, leading to a 35% increase in usage by students. Designed an intuitive interface to enhance usability and learning"
              ghLink="https://github.com/ojasbhosale/Modulation-Simulator"
              demoLink="https://modulation-simulator.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audiblescript}
              isBlog={false}
              title="AudibleScript: Text-to-Speech App"
              description="Developed a JavaScript app using the Web Speech API for converting text into speech and Speech into text. Improved accessibility for visually impaired users, increasing user retention by 20%. Optimized performance to ensure seamless usage across devices."
              ghLink="https://github.com/ojasbhosale/AudibleScript_Text-Speech_Conversion"
              demoLink="https://audible-script-ojasbhosale.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker App"
              description="Built a full-stack expense tracker using React.js, Node.js, and MongoDB, increasing user engagement by 30%. Designed secure RESTful APIs and deployed the application on Render and Netlify. Conducted thorough API testing with Postman to ensure data reliability."
              ghLink="https://github.com/ojasbhosale/ExpenseTracker"
              demoLink="https://expense-tracker-mern-ojas.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Working on this project, it will be updated soon."
              ghLink="https://github.com/ojasbhosale"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Working on this project, it will be updated soon."
              ghLink="https://github.com/ojasbhosale"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="working on this project, it will be updated soon."
              ghLink="https://github.com/ojasbhosale"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
