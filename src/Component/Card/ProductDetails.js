import React from "react";
import { Container, Card } from "react-bootstrap";

export const ProductCard = (props) => {       // Reusable ProductCard component 
    return (
      <Container className="mt-5">
      <Card style={{ width: "200px" }}>
        <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" src={props.src} />
          <div>Review : 4 star</div>
      </Card>
    </Container>
    );
};