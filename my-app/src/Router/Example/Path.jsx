import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from "../Example/About";
import Contact from "../Example/Contact";
import Home from "../Example/Home";

const Path = () => {
    return (
        
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      );
}

export default Path