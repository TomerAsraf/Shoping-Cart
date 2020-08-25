import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductsContextProvider from './context/ProductsContextProvider';

const App = () => {

  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <main>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </ProductsContextProvider>

  )
}

export default App;
