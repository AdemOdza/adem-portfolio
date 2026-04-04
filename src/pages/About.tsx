import React from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import '../pages.css';

const skills: Record<string, string[]> = {
    'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Python', 'REST APIs'],
    'Tools & Other': ['Git', 'GitHub', 'VS Code', 'Linux'],
};

const About = () => {
    return (
        <div className="page-wrapper">
            <Container className="py-5">

                {/* ── Hero ── */}
                <Row className="mb-5 align-items-center justify-content-center g-4 text-center">
                    <Col xs="auto">
                        <div className="avatar-circle mx-auto">AO</div>
                    </Col>
                    <Col xs={12} sm="auto">
                        <h1 className="display-5 fw-bold mb-1">Adem Odza</h1>
                        <p className="text-muted fs-5 mb-0">
                            Software Developer &middot; Student &middot; Problem Solver
                        </p>
                    </Col>
                </Row>

                <hr className="mb-5" />

                {/* ── About ── */}
                <Row className="mb-5 justify-content-center">
                    <Col lg={8}>
                        <h2 className="section-title">About Me</h2>
                        <p className="lead mb-3">
                            Hi! I&apos;m Adem — a software developer and student with a passion for building
                            clean, functional applications that solve real-world problems.
                        </p>
                        <p className="text-muted">
                            I enjoy working across the full stack, from crafting intuitive user interfaces
                            to designing backend systems. I&apos;m always looking for opportunities to learn,
                            collaborate, and ship things that matter.
                        </p>
                        <p className="text-muted">
                            When I&apos;m not writing code, you&apos;ll find me exploring new technologies, working
                            on side projects, or diving into one of my hobbies. Feel free to browse around!
                        </p>
                    </Col>
                </Row>

                {/* ── Skills ── */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="section-title mb-4">Skills</h2>
                        <Row className="g-3">
                            {Object.entries(skills).map(([category, items]) => (
                                <Col md={4} key={category}>
                                    <Card className="skill-card h-100">
                                        <Card.Body>
                                            <Card.Title className="text-muted small text-uppercase fw-semibold mb-3 letter-spacing-wide">
                                                {category}
                                            </Card.Title>
                                            <div className="d-flex flex-wrap gap-2">
                                                {items.map(skill => (
                                                    <Badge key={skill} className="skill-badge">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* ── Education ── */}
                <Row>
                    <Col>
                        <h2 className="section-title mb-4">Education</h2>
                        <Card className="info-card">
                            <Card.Body className="py-4 px-4">
                                <Row className="align-items-center">
                                    <Col>
                                        <h5 className="fw-bold mb-1">
                                            Bachelor of Science in Computer Science
                                        </h5>
                                        <p className="text-muted mb-0">
                                            University Name &middot; Expected Graduation: 20XX
                                        </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default About;
