import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="light" className='text-dark mt-5' onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className='mt-5 pt-5'>
              <label>
                <input type="file" style={{ display: 'none' }} />
                <img src="" alt="" />
              </label>
            </Col>
            <Col>
              <input type="text" placeholder='Project Title' className='form-control mb-3'/>
              <input type="text" placeholder='Languages Used' className='form-control mb-3'/>
              <input type="text" placeholder='Github Link' className='form-control mb-3'/>
              <input type="text" placeholder='Live Link' className='form-control mb-3'/>
              <input type="text" placeholder='Overview' className='form-control mb-3'/>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="Light" onClick={handleClose}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject