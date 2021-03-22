import React from 'react';
import ImageCaption from './ImageCaption/ImageCaption'
import { Card, CardImg, CardTitle, Container, Row, Col } from 'reactstrap';


function InfoCard(props) {
    return(
    <>
    <Container>
        <Col>
        {/* First row  is title, second row is paragraph*/}
            <Row>
                <h1>{props.title}</h1>
            </Row>
            <Row>
                <p>{props.body}</p>
            </Row>
        </Col>
    </Container>
    </>
    )
}

export default InfoCard