import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import Login from"./components/Login";
import { Routes, Route } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter><Routes>
      <Route path="/Home" element={<Home></Home>}></Route>
      <Route path="/Home/Login" element={<Login></Login>}></Route>
      <Route path="/Home/Signup" element ={<Signup></Signup>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
