import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProjectCard from '../Components/ProjectCard';

function Projects() {
  return (
    <div>
      <Container>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center mt-5">
          <h2>All Projects</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center mt-3">
          <Form.Control type="text" placeholder="Search By Technology" className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col>
        <ProjectCard/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Projects