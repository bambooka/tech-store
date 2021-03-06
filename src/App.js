import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch} from 'react-router-dom';

import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Sidecart from './component/Sidecart'
import Footer from './component/Footer'

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'
import Cart from './pages/CartPage'
import Default from './pages/DefaultPage'


function App() {
    return (
        <>
            <Navbar />
            <Sidebar/>
            <Sidecart />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/products/:id" component={SingleProduct}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/default" component={Default}/>
            </Switch>
                <Footer />
        </>
    );
}

export default App;
