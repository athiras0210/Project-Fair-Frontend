import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Auth({ register }) {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={6} className='mt-5'>
          <div className="d-flex align-items-center justify-content-center h-100">
            <img src="https://cdn.dribbble.com/users/2131993/screenshots/4948736/thoughtworks-gif_dribbble.gif" alt="Your Image" className="img-fluid p-4" />
          </div>
        </Col>
        <Col md={6} className='mt-5'>
          <div className="d-flex align-items-center justify-content-center h-100">
            <Form className="shadow bg-black">
              <h2 className="text-center mt-4">Project Fair</h2>
              <h4 className="text-center">
                {register ? 'Register Here...' : 'Login Here..'}
              </h4>
              <div className="mx-5 px-5 mt-3">
                {register && (
                  <Form.Group controlId="formBasicUsername" className="mb-3">
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                )}

                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className='text-center mt-2'>
                  {register ? (
                    <>
                      <Button variant='dark' className='m-4'>Register</Button>
                      <p>Already Registered? <Link to={'/login'} style={{textDecoration:'none'}} className="link">Login Here...</Link></p>
                    </>
                  ) : (
                    <>
                      <Button variant='dark' className='m-4'>Login</Button>
                      <p>New to Here? <Link to={'/register'} style={{textDecoration:'none'}} className="link">Register Here...</Link></p>
                    </>
                  )}
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
