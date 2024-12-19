import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const skills = {
    "Languages": "Java, JavaScript, HTML, CSS, C, C++, Python, Kotlin",
    "Communication skills": "English and Spanish",
    "Technical Tools": "Git/GitHub, React, Node.js, Matplotlib, NumPy, Android Studio, VSCode"
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <h2 className="text-center my-5">Skills</h2>
        <Row>
          {Object.keys(skills).map((category, index) => (
            <Col xs={12} md={4} key={index} className="mb-4">
              <h4 className="text-danger">{category}</h4>
              <p>{skills[category]}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;