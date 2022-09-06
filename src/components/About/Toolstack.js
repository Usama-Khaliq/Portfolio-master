import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiWindows,
  SiIntellijidea,
  SiEclipseide,
  SiAndroidstudio,
  SiApachenetbeanside,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
	  <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
    </Row>
  );
}

export default Toolstack;
