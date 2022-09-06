import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Usama Khaliq </span>
            from <span className="purple"> Bolzano, Italy. </span>
			Currently in <span className="purple"> London.</span>
            <br />I am a student pursuing a masters in <span className="purple"> Artificial Intelligence</span> at London Metropolitan University.
			<br />I graduated <span className="purple">BSC Computer Science</span> in 2022 with <span className="purple"> First Class Honours.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
			<li className="about-activity">
              <ImPointRight /> Learning new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only true wisdom is in knowing you know nothing."{" "}
          </p>
          <footer className="blockquote-footer">Socrates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
