import React from 'react';
import './ImageCaption.css'
import '../../HomePage/HomePage.css'
import { Card, CardImg, CardTitle, Container, Row, Col } from 'reactstrap';

function ImageCaption(props){
    return(
        <>
        <Card id="background-info">
            <Container style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}>

                <Row>
                    <CardImg id="image" class = "homepage-color-theme"
                    top 
                    width="100%"
                    src={props.src} 
                    alt={props.alt}/>
                </Row>

                <Row>
                    <CardTitle id="caption-info"> {props.text} </CardTitle>
                </Row>
                
            </Container> 
        </Card>
        </>
    )
}

export default ImageCaption