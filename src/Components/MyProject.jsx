import React from 'react'
import AddProject from './AddProject';
import { Col, Row } from 'react-bootstrap';
import { RxGithubLogo } from "react-icons/rx";
import { FaLink } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function MyProject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='mt-5'>My Project</h3>
            <AddProject/>
        </div>

        <Row className='shadow m-3 p-3'>
            <Col>
            <h4>Project Title</h4>
            </Col>
            <Col className='d-flex justify-content-evenly'>
            <button className='btn'><RxGithubLogo /></button>
            <button className='btn'><FaLink /></button>
            <button className='btn'><RiDeleteBin6Line /></button>
            </Col>
        </Row>
    </div>
  )
}

export default MyProject