import React from "react";
import { Card, Container, Button } from "react-bootstrap";


const CardComponent = (props) => {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Img
                    variant="top"
                    src={props.src}
                    />
                <Card.Body className="d-block">
                    <p>Price: {props.price}</p>
                    <Button variant="info">Add To Cart</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CardComponent;