import React from 'react'
import { ListComponent } from './components/ListComponent';
import { NavBar } from './components/NavBar';
import { ProductContainer } from './components/ProductContainer';
import { QuestionsSection } from './components/QuestionsSection';
import { SearchComponent } from './components/SearchComponent';

export const App = () => {
  return (
    <div>
      <NavBar />
      <ListComponent />
      <ProductContainer />
      <QuestionsSection />
      <SearchComponent />
    </div>
  )
}

export default App;

