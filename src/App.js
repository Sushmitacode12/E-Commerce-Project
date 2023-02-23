import React, { useState  } from 'react';
import { Header } from './Component/Layout/Header';
import Footer  from './Component/Layout/Footer';
import { CartContext, AuthContext } from './Component/Store/cart-context';
import {  Redirect, Route, Switch  } from 'react-router-dom';
import  About  from './Component/Pages/About';
import { CartProduct } from './Component/Cart/AvailableProduct';
import {Home} from './Component/Pages/Home';
import { ContactUs } from './Component/Pages/ContactUs';
import Login from './Component/Pages/Login';
import ProductPage from './Component/Pages/Product-page';


function App() {
  
   const [cartItem, setCartItem] = useState([]);
   const [token, setToken] = useState(false);

   const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
  };

  const submitHandler = async (detailRef) => {
    const response = await fetch(
      "https://e-commerce-website-9bb41-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(detailRef),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
    <Switch> 
      <AuthContext.Provider value={contextValue}>
          <CartContext.Provider value={{ cartItem, setCartItem }}>
          <Header />       
        <Route exact path="/" >
          <CartProduct />
        </Route>
        <Route exact path="/Home" >
          <Home />
        </Route>
         <Route exact path="/About" >
          <About />
        </Route>
        <Route exact path="/Login" >
          <Login /> 
        </Route>
        <Route exact path="/Store" >
          <CartProduct />
        </Route>
        <Route exact path="//product-page" >
          <ProductPage />
        </Route>
        <Route exact path="/ContactUs" >
          <ContactUs onSumit={submitHandler}/> 
        </Route> 
        <Route exact path="/product-page">
          <ProductPage />
            </Route>
        <Route path="*">
          <Redirect to="/login" />
            </Route>
            <Footer />
          </CartContext.Provider>
        </AuthContext.Provider> 
    </Switch>
   </div> 
    
  );
}

export default App;
