import React from 'react';
import './ImageCaption.css'
import '../../HomePage/HomePage.css'
import { Card, CardImg, CardTitle, Container, Row, Col, CardSubtitle } from 'reactstrap';

function ImageCaption(props){
    return(
        <>
            <Container id="background-info">

                <Row>
                    <CardImg id="image"
                    top 
                    width="100%"
                    src={props.src} 
                    alt={props.alt}/>

                    <Col>
                        <CardTitle id="caption-info"> {props.text} </CardTitle>
                    </Col>
                </Row>

                <Row id= "caption-info">
                    
                </Row>
                
            </Container> 
        </>
    )
}

export default ImageCaption