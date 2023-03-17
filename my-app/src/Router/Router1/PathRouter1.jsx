import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Router1/Login'
import Home from '../Router1/Home'

function PathRouter1 () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default PathRouter1