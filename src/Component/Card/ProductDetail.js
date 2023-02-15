import React from "react";
import { Container, Card } from "react-bootstrap";

const ProductCard = (props) => {
    return (
        <Container className="mt-5">
      <Card style={{ width: "300px" }}>
        <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" src={props.src} />
      </Card>
    </Container>
    )
}

export default ProductCard;