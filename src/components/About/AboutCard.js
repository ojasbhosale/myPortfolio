import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ojas Bhosale </span> 
            from <span className="purple">Pune, India.</span>
            <br />
            I am an aspiring software developer with expertise in building scalable web applications.
            <br />
            I am currently pursuing a <b>B.Tech</b> in Electronics and Communication Engineering at 
            <span className="purple"> IIIT Manipur</span>.
            <br />
            <br />
            Beyond coding, here are a few activities I am passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and Sharing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Networking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, and create solutions that impact lives!"{" "}
          </p>
          <footer className="blockquote-footer">Ojas Bhosale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
