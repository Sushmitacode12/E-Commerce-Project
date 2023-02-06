import React, { useState } from 'react';
import { CartProduct } from './Component/Cart/product';
import { Header } from './Component/Layout/Header';
import { Footer } from './Component/Layout/Footer';
import { CartContext } from './Component/Store/cart-context';

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div>
      <CartContext.Provider value={{cartItem, setCartItem}}>  
        <Header />
        <CartProduct />
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
