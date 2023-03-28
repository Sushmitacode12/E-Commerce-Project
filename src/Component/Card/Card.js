import React, { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { CartContext, AuthContext } from "../stor/cart-context";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getCartListService } from "../../services/apiServices";

export default function CardComponent(props) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const a = authCtx.userEmailId.replace("@", "");
  const newEmailId = a.replace(".", "");            // modified newEmailId without @ and . 

  const cartHandler = async(title, src, price) => {   // Adding a newItem to the cart by sending POST API request.
    const newItem = {
      title,
      src,
      price,
      quantity: 1,
    };
    await axios
      .post(`https://e-commerce-16a42-default-rtdb.firebaseio.com/cartItem/${newEmailId}.json`, newItem)
      .then(async (data) => {
        const cartData = await getCartListService(newEmailId);            // list of cart item in the cart.
        console.log(data);

    cartCtx.setCartItem(cartData);
  });
};
  return (
    <Container className="mt-5">
      <Card style={{ width: "300px" }}>
        <Card.Title>{props.title}</Card.Title>
        <NavLink to={`/product-page/${props.id}`}>
          <Card.Img variant="top" src={props.src} />
        </NavLink>
        <Card.Body className="d-block">
          <p>Price: {props.price}</p>
          <Button
            variant="info"
            onClick={() => cartHandler(props.title, props.src, props.price)}
          >
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


