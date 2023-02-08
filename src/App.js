import React, { useState } from 'react';
import { CartProduct } from './Component/Cart/product';
import { Header } from './Component/Layout/Header';
import { Footer } from './Component/Layout/Footer';
import { CartContext } from './Component/Store/cart-context';
import {  Route, Switch  } from 'react-router-dom';
import  About  from './Component/Pages/About';
import Home from './Component/Pages/Home';

function App() {

  const [product, setproduct] = useState([]);

  async function FetchProducts() {
    const response = await fetch('https://swapi.dev/api/people/1/')
    const data = await response.json();

    const transformedProduct  = data.results.map(productData => {
      return {
            name: productData.name,
            diameter: productData.diameter
          }
        });
        setproduct(transformedProduct);
  }

  const [cartItem, setCartItem] = useState([]);
  

  return (
    <div>
    <Switch>
      <CartContext.Provider value={{cartItem, setCartItem}}>  
        <Header />
        <Route exact path="/">
        <CartProduct />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Footer />
      </CartContext.Provider>
      </Switch> 
    </div>  
  );
}

export default App;
