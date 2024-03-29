import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Another from "./Components/Another";
import './App.css';

const App = () => {
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        
    </Routes>
    <Another />
  </BrowserRouter>;
};

export default App;
