import React from 'react';


import './App.css';
import Product from './Component/Cart/product';
import Navigation from './Component/Navigation';
import { Footer } from './Component/Footer/Footer';

function App() {
  return (
    <div>
    <Navigation />
    < Product />
   <Footer />
    </div>
  );
}

export default App;
