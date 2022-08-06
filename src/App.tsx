import React from 'react';
import './App.css';
import { ProductCard } from './features/products/ProductCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard name="Call of Duty" description="First Person Shooter" price={99.99} />
        <ProductCard name="FIFA 2022" description="Football game" price={139.99} />
        <ProductCard name="Counter Strike" description="First Person Shooter" price={129.99} />
      </header>
    </div>
  );
}

export default App;
