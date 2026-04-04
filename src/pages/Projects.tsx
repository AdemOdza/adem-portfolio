import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages.css';
import ProjectCard, { Project } from '../components/ProjectsComponents/ProjectCard';

const projects: Project[] = [
    {
        title: 'Personal Portfolio',
        description:
            'This very site! Built with React, TypeScript, and React-Bootstrap. A clean, ' +
            'router-driven SPA to showcase projects and share a bit about who I am.',
        tech: ['React', 'TypeScript', 'Bootstrap', 'React Router'],
        githubUrl: 'https://github.com/AdemOdza',
    },
    {
        title: 'Project Two',
        description:
            'A brief description of this project. What problem does it solve? What was ' +
            'the most interesting technical challenge? Replace this with your real project.',
        tech: ['Python', 'Flask', 'SQLite'],
        githubUrl: '#',
    },
    {
        title: 'Project Three',
        description:
            'Another project to highlight. Describe the outcome, what you learned, or ' +
            "anything that makes it stand out. Add a live link if it's deployed.",
        tech: ['JavaScript', 'Node.js', 'Express'],
        githubUrl: '#',
        liveUrl: '#',
    },
];

const Projects = () => {
    return (
        <div className="page-wrapper">
            <Container className="py-5">

                <h1 className="display-5 fw-bold mb-2">Projects</h1>
                <p className="text-muted fs-5 mb-5">A collection of things I&apos;ve built.</p>

                <Row className="g-4">
                    {projects.map((project) => (
                        <Col md={6} lg={4} key={project.title}>
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
};

export default Projects;
