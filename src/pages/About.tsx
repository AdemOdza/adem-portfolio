import React from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import '../pages.css';
import { useLanguage } from '../context/LanguageContext';
import { aboutTranslations } from '../translations';

const About = () => {
    const { language } = useLanguage();
    const t = aboutTranslations[language];

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
                        <p className="text-muted fs-5 mb-0">{t.heroTagline}</p>
                    </Col>
                </Row>

                <hr className="mb-5" />

                {/* ── About ── */}
                <Row className="mb-5 justify-content-center">
                    <Col lg={8}>
                        <h2 className="section-title">{t.aboutTitle}</h2>
                        <p className="lead mb-3">{t.aboutLead}</p>
                        <p className="text-muted">{t.aboutP2}</p>
                        <p className="text-muted">{t.aboutP3}</p>
                    </Col>
                </Row>

                {/* ── Skills ── */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="section-title mb-4">{t.skillsTitle}</h2>
                        <Row className="g-3">
                            {Object.entries(t.skills).map(([category, items]) => (
                                <Col md={4} key={category}>
                                    <Card className="skill-card h-100">
                                        <Card.Body>
                                            <Card.Title className="text-muted small text-uppercase fw-semibold mb-3">
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
                        <h2 className="section-title mb-4">{t.educationTitle}</h2>
                        <Card className="info-card">
                            <Card.Body className="py-4 px-4">
                                <h5 className="fw-bold mb-1">{t.educationDegree}</h5>
                                <p className="text-muted mb-0">{t.educationDetails}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default About;
