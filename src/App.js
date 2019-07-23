import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Products from './pages/ProguctsPage'
import SingleProduct from './pages/SingleProductPage'
import Cart from './pages/CartPage'
import Defaullt from './pages/Default'


function App() {
  return (

  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/products" exact component={Products} />
    <Route path="/products/:id" component={SingleProduct} />
    <Route path="/cart" component={Cart} />
    <Route path="/default" component={Defaullt} />
  </Switch>
  );
}

export default App;
