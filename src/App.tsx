import React from 'react';
import './App.css';
import { CartInfo } from './features/cart/CartInfo';
import { ProductsWrapper } from './features/products/ProductsWrapper';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light justify-content-between mb-5">
        <div className="container">
          <a href="/" className="navbar-brand">ProductsShop</a>
          <CartInfo />
        </div> 
      </nav>

      <header className="App-header">
        
      </header>
      <main>
        <ProductsWrapper />
      </main>
    </div>
  );
}

export default App;
