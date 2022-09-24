import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from"./pages/Login";
import Signup from"./pages/Signup";
import { Routes, Route } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter><Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Signup" element ={<Signup></Signup>}></Route>
      <Route path="/product"></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
