import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<div>Home Page</div>}/>
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/jekono" element={<div>jekono Page</div>} />
    </Routes>
  </BrowserRouter>;
};

export default App;
