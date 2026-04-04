import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages.css';
import InterestCard from '../components/InterestsComponents/InterestCard';
import { useLanguage } from '../context/LanguageContext';
import { interestsTranslations } from '../translations';

const Interests = () => {
    const { language } = useLanguage();
    const t = interestsTranslations[language];

    return (
        <div className="page-wrapper">
            <Container className="py-5">

                <h1 className="display-5 fw-bold mb-2">{t.heading}</h1>
                <p className="text-muted fs-5 mb-5">{t.subheading}</p>

                <Row className="g-4">
                    {t.items.map((item) => (
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
