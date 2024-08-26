import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote ">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashbir Pal  </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently a Fresher and higly motivated to work.
            <br />
            I have completed my Graduation at GIFT(BBSR).
            <br />
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight />Watching Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
