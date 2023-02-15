import React, { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import { CartProduct } from "../Cart/AvailableProduct";
import {CartContext} from "../Store/cart-context";

export default function CardComponent  (props)  {

    const cartCtx = useContext(CartContext);

    const cartHandler = (title, src, price) => {
        const newItem = {
            title,
            src,
            price,
            quantity: 1,
        };

        let ispresent = false;

        cartCtx.cartItem.map((item) => {
            if(item.title === newItem.title) {
                ispresent = true;
                return newItem;
            }
            return item;
        });

        cartCtx.setCartItem(
            ispresent ? [...cartCtx.cartItem] : [...cartCtx.cartItem, newItem]
          );
    };

    return (
        <Container className="mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Title>{props.title}</Card.Title>
                <NavLink to="/product-page">
                <Card.Img 
                    variant="top"
                     src={props.src}
                />
                </NavLink>
                <Card.Body className="d-block">
                    <p>Price: {props.price}</p>
                    <Button
                        variant="info"
                        onClick={() => 
                            cartHandler(props.title, props.src, props.price)}
                            >
                            Add To Cart
                            </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};


