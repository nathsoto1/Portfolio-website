import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Universal Fitness",
    description: "An app focused on helping users with their fitness goals!",
    link: "https://github.com/CSC-3380-Fall-2024/Team-16",
  },
  {
    title: "NeuroSim",
    description: "A weather app using OpenWeatherMap API to display current weather conditions.",
    link: "https://github.com/nathsoto1/NeuroSim",
  },
  {
    title: "Encrypt",
    description: "A website that encrypts and stores passwords for users.",
    link: "https://github.com/nathsoto1/Encrypt-",
  },
];

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <h2>Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;