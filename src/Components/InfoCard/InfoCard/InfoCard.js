import React from 'react';
import './InfoCard.css'
import ImageCaption from '../ImageCaption/ImageCaption'
import { Card, CardImg, CardTitle, Container, Row, Col, Jumbotron} from 'reactstrap';


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
                <Jumbotron>
                <p class="body-text">{props.body}</p>
                </Jumbotron>
            </Row>
        </Col>
    </Container>
    </>
    )
}

export default InfoCard