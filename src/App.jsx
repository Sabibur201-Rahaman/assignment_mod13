import React, { Component } from "react";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Contact from './pages/Contact';
import Component_1 from "./components_1/component_1"; 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component_1" element={<Component_1/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/*" element={<NotFound/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
