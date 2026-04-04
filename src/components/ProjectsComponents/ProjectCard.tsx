import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

export interface Project {
    title: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
}

// Map tech names to Bootstrap badge variants
export const techColor: Record<string, { bg: string; text?: string }> = {
    'React':         { bg: 'primary' },
    'TypeScript':    { bg: 'info', text: 'dark' },
    'Bootstrap':     { bg: 'secondary' },
    'React Router':  { bg: 'light', text: 'dark' },
    'Python':        { bg: 'warning', text: 'dark' },
    'Flask':         { bg: 'success' },
    'SQLite':        { bg: 'dark' },
    'JavaScript':    { bg: 'warning', text: 'dark' },
    'Node.js':       { bg: 'success' },
    'Express':       { bg: 'secondary' },
};

const ProjectCard = ({ title, description, tech, githubUrl, liveUrl }: Project) => {
    return (
        <Card className="project-card h-100">
            <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-2">
                    {title}
                </Card.Title>
                <Card.Text className="text-muted flex-grow-1 mb-3">
                    {description}
                </Card.Text>
                <div className="d-flex flex-wrap gap-1 mb-3">
                    {tech.map(t => {
                        const c = techColor[t] ?? { bg: 'secondary' };
                        return (
                            <Badge
                                key={t}
                                bg={c.bg}
                                text={c.text}
                                className="tech-badge"
                            >
                                {t}
                            </Badge>
                        );
                    })}
                </div>
                <div className="d-flex gap-2">
                    {githubUrl && (
                        <Button
                            variant="outline-dark"
                            size="sm"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </Button>
                    )}
                    {liveUrl && (
                        <Button
                            variant="dark"
                            size="sm"
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
