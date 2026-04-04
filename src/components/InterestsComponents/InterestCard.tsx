import React from 'react';
import { Card } from 'react-bootstrap';
import { InterestData } from '../../types';

const InterestCard = ({ emoji, title, description }: InterestData) => {
    return (
        <Card className="interest-card h-100">
            <Card.Body className="p-4">
                <span className="interest-emoji">{emoji}</span>
                <Card.Title className="fw-bold mb-2">{title}</Card.Title>
                <Card.Text className="text-muted">{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default InterestCard;
