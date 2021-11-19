import React from 'react'
import InfoCard from '../InfoCard/InfoCard/InfoCard'
import MyNavbar from '../MyNavbar/MyNavbar'
import './HomePage.css'
import { Container, Row, Col} from 'reactstrap';
import ImageCaption from '../InfoCard/ImageCaption/ImageCaption';
import face from '../../images/face.jpeg'


function HomePage(){
    return(
        <Container id="homepage-background">
            <Col>
                <Row xl="1" id="row-spacer"> <h1>         </h1></Row>
                <Row xl="1"> 
                    <Row/>
                </Row>
                
                <Row md="2" >
                    <Col>
                        <ImageCaption src={face} alt="test" text="Welcome to my portfolio!"/>
                    </Col>
                    <Col>
                        <InfoCard title="About Me" body="My name is Adem Odza and I am a Computer Science student at the University of Texas at Dallas. aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a a aaaaaaaaaaaa aaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa a a aaaaaaaaaaaaaaaaaaaaaaa a a aaaaaaaaaaaaaaaaaaaaaa"/>
                    </Col>
                </Row>
            </Col>

        </Container>
    )
}

export default HomePage;