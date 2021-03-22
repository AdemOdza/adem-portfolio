import React from 'react';
import { Card, CardImg, CardTitle, Container, Row, Col } from 'reactstrap';

function ImageCaption(props){
    return(
        <>
        <Card>
            <Container>

                <Row>
                    <CardImg top 
                    width="100%"
                    src={props.src} 
                    alt={props.alt}/>
                </Row>

                <Row>
                    <CardTitle> {props.text} </CardTitle>
                </Row>
                
            </Container> 
        </Card>
        </>
    )
}

export default ImageCaption