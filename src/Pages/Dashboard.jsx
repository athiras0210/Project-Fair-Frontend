import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyProject from '../Components/MyProject';
import Profile from '../Components/Profile';

function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <h2 className='text-center mt-3'>welcome <span className='text-light'>User</span></h2>
          <Col>
            <MyProject />
          </Col>
          <Col>
            <Profile />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Dashboard