import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages.css';
import ProjectCard from '../components/ProjectsComponents/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { projectTranslations } from '../translations';

const Projects = () => {
    const { language } = useLanguage();
    const t = projectTranslations[language];

    return (
        <div className="page-wrapper">
            <Container className="py-5">

                <h1 className="display-5 fw-bold mb-2">{t.heading}</h1>
                <p className="text-muted fs-5 mb-5">{t.subheading}</p>

                <Row className="g-4">
                    {t.items.map((project) => (
                        <Col md={6} lg={4} key={project.title}>
                            <ProjectCard
                                {...project}
                                githubLabel={t.githubBtn}
                                liveDemoLabel={t.liveDemoBtn}
                            />
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
};

export default Projects;
