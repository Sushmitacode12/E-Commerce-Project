import React from 'react';

import CartProduct from './Component/Cart/product';
import { Header } from './Component/Layout/Header';
import { Footer } from './Component/Layout/Footer';

function App() {
  return (
    <div>
    <Header />
    <CartProduct />
    <Footer />
    </div>
  );
}

export default App;
