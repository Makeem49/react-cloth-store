import React from "react";
import Navbar from "./Navbar Component/Navbar";
import Container from "./Container component/Container";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./About component/About";
import Cart from "./Cart component/Cart";
import ProductDetails from "./ProdcutDetails/ProductDetails";

export default function App() {
  return <>
    <BrowserRouter>
        <Navbar></Navbar>
            <Switch>
                <Route exact path='/'>
                    <Container />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/login'>
                    <h1>Login container here</h1>
                </Route>
                <Route exact path='/cart'>
                    <Cart />
                </Route>
                <Route exact path='/products/:id'>
                    <ProductDetails />
                </Route>
        </Switch>
    </BrowserRouter>
  </>
}