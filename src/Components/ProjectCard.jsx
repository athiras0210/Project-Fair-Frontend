import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { FaLink } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='mt-5'>
      <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.yFLaMGQMW4IZkkVZw0VHCwHaEj&pid=Api&P=0&h=180" />
        <Card.Body>
          <Card.Title className='text-center'>Project Title</Card.Title>
          {/* Add other card content here if needed */}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6}>
              <img src="https://tse4.mm.bing.net/th?id=OIP.yFLaMGQMW4IZkkVZw0VHCwHaEj&pid=Api&P=0&h=180" className="img-fluid mt-3" alt="" />
            </Col>
            <Col xs={12} md={6}>
              <h2>Project Title</h2>
              <h4 style={{ textAlign: 'justify' }}>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium delectus recusandae quo aut!</h4>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant="btn-dark" style={{ marginRight: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}><RxGithubLogo /></a>
            </Button>
            <Button variant="btn-dark" style={{ marginRight: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}><FaLink /></a>
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default ProjectCard;
