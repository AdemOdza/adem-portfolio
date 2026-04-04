import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages.css';
import InterestCard, { Interest } from '../components/InterestsComponents/InterestCard';

const interests: Interest[] = [
    {
        emoji: '💻',
        title: 'Software Development',
        description:
            'Building things with code is endlessly rewarding. I love exploring new frameworks, ' +
            'diving into open-source projects, and sharpening my problem-solving skills.',
    },
    {
        emoji: '🎮',
        title: 'Gaming',
        description:
            'From story-driven single-player experiences to competitive multiplayer, gaming is ' +
            'a big part of how I unwind, stay creative, and connect with friends.',
    },
    {
        emoji: '🎵',
        title: 'Music',
        description:
            'I enjoy a wide range of genres. Music keeps me focused while coding and ' +
            'inspired when I need a mental reset between sessions.',
    },
    {
        emoji: '📚',
        title: 'Continuous Learning',
        description:
            "Whether it&apos;s a new programming concept, a history deep-dive, or a random Wikipedia " +
            'rabbit hole — I genuinely love picking up new knowledge.',
    },
    {
        emoji: '🌍',
        title: 'Travel',
        description:
            'Exploring new places, cultures, and cuisines is something I always look forward to. ' +
            "Every trip teaches me something I can&apos;t learn from a textbook.",
    },
    {
        emoji: '🔧',
        title: 'Tinkering',
        description:
            'Taking things apart, building little hardware projects, and experimenting with anything ' +
            'I can get my hands on — software and physical alike.',
    },
];

const Interests = () => {
    return (
        <div className="page-wrapper">
            <Container className="py-5">

                <h1 className="display-5 fw-bold mb-2">Interests</h1>
                <p className="text-muted fs-5 mb-5">
                    A few things I care about beyond the code editor.
                </p>

                <Row className="g-4">
                    {interests.map((item) => (
                        <Col sm={6} md={4} key={item.title}>
                            <InterestCard {...item} />
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
};

export default Interests;
