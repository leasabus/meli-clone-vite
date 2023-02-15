import React from 'react'
import { ListComponent } from './components/ListComponent';
import { NavBar } from './components/NavBar';
import { ProductContainer } from './components/ProductContainer';

export const App = () => {
  return (
    <div>
      <NavBar />
      <ListComponent />
      <ProductContainer />
    </div>
  )
}

export default App;

