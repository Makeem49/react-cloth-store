import React from "react";
import Navbar from "./Navbar Component/Navbar";
import Container from "./Container component/Container";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return <>
        <BrowserRouter>
          <Navbar></Navbar>
          <Container />
        </BrowserRouter>
  </>
}