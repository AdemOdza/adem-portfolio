import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import MyNavbar from '../MyNavbar/MyNavbar'
import './HomePage.css'
import { Container, Row, Col} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import ImageCaption from '../InfoCard/ImageCaption/ImageCaption';

const face = '/IMG_3115.jpeg'

function HomePage(){
    return(
        <Container>
            <Row><h1>TEsting the homePage!!!!!</h1></Row>
            <Row>Row 2</Row>
            <Row>Row 3</Row>
            <Row>Row 4</Row>
            <Row>Row 5</Row>
            <Row>Row 6</Row>
            <Row>Row 7</Row>
            <Row>Row 8</Row>
            <Row>
                <Col>
                    <Image src={face} rounded/>
                </Col>
                <Col>
                    <InfoCard title="PogChamp" body="My name is Adem Odza and I am a Computer Science student at the University of Texas at Dallas."/>
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage;