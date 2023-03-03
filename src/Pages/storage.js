import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../Component/stor/cart-context";
import { CartProduct } from "../Component/Cart/AvailableProduct";

export const Storage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      {authCtx.isLoggedIn ? <CartProduct /> : <Redirect to="/login" />}
    </div>
  );
};