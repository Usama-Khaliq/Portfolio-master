import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiDatabase,
  DiGithub,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
	  <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
    </Row>
  );
}

export default Techstack;
