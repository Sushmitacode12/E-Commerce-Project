import React, { useState } from 'react';
import { CartProduct } from './Component/Cart/product';
import { Header } from './Component/Layout/Header';
import { Footer } from './Component/Layout/Footer';
import { CartContext } from './Component/Store/cart-context';
import {  Route, Switch  } from 'react-router-dom';
import  About  from './Component/Pages/About';
import {Home} from './Component/Pages/Home';
import ContactUs from './Component/Pages/ContactUs';

function App() {
  
   const [cartItem, setCartItem] = useState([]);
  

  return (
    
    <Switch>
      <CartContext.Provider value={{cartItem, setCartItem}}>  
        <Header />
        <Route exact path="/Store">
         <CartProduct />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/ContactUs">
        <ContactUs /> 
        </Route>
         <Footer /> 
      </CartContext.Provider>
      </Switch> 
 
  );
}

export default App;
