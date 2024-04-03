import React from 'react';
import { Link } from 'react-router-dom';
import programmer from '../assets/programmer.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCard from '../Components/ProjectCard'

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6} className='text-center mt-5'>
                        <h1 className='text-center mt-5'>Project Fair</h1>
                        <p style={{ textAlign: 'justify' }}>
                            Project Management is the application of specific knowledge, skills, methodologies, and techniques aimed at achieving specific
                            and measurable project goals, including, ultimately, successful project completion. It differs from general “management” because
                            project management relates directly to the goals and time-bound objectives achieved within the scope of a project itself, on a
                            limited timeline, rather than an ongoing one.
                        </p>
                        <div className='text-center'>
                            <Link to={'login'}>
                                <Button variant='dark' className='m-5'>Get Started</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={programmer} className='img-fluid' alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col style={{ height: '500px' }}>
                        <h1 className='text-center'>Explore Our Project</h1>
                        <marquee width="100%" height="500px" direction="left">
                            <div>
                                <ProjectCard />
                            </div>
                        </marquee>
                    </Col>
                </Row>

                <Row className='text-center mb-5'>
                    <h1 className='w-100 mt-5 mb-5'>Our Services</h1>
                    <Col md={4}>
                        {/* Content for the first column */}
                        <div className="card d-flex flex-column h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Web Designing</h5>
                                <p style={{ textAlign: 'justify' }} className="card-text">We offer comprehensive web designing services tailored to your needs.
                                    Our team of experts will work closely with you to understand your brand identity and create visually appealing designs that resonate
                                    with your target audience. From wireframing to final execution, we ensure that your website not only looks stunning but also delivers
                                    a seamless user experience across all devices.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card d-flex flex-column h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Single Page Applications</h5>
                                <p style={{ textAlign: 'justify' }} className="card-text">Our single page application development services focus on leveraging modern web
                                    technologies to build highly interactive and efficient applications. Whether you need a portfolio website, a marketing landing page, or a
                                    web-based tool, we specialize in creating SPAs that load quickly, respond smoothly, and engage users effectively. </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card d-flex flex-column h-100">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Backend Services</h5>
                                <p style={{ textAlign: 'justify' }} className="card-text">Our backend services play a crucial role in powering your web applications and
                                    ensuring their seamless operation. We handle everything from setting up robust server architecture to implementing efficient database
                                    management systems. Our experienced developers specialize in building scalable and secure backend solutions using technologies like Node.js,
                                    Django, and Ruby on Rails.</p>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default Home