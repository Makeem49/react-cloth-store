import React, {useContext} from "react";
import Navbar from "./Navbar Component/Navbar";
import Container from "./Container component/Container";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./About component/About";
import Cart from "./Cart component/Cart";
import ProductDetails from "./ProductDetails/ProductDetails.js";
import ThemeProvider from "./helpers/ThemeProvider";
import './index.css'
import { ThemeContext } from "./helpers/ThemeProvider";




function MainWrapper() {
    const mode = useContext(ThemeContext)
    const {theme} = mode
    return <div className={`${theme}`}>
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
    </div>
}

export default function App() {
  return <ThemeProvider>
    <>
        <BrowserRouter>
            <MainWrapper />
        </BrowserRouter>
    </>
  </ThemeProvider>
}