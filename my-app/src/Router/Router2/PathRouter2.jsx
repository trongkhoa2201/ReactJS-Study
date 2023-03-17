import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login'
import Employee from './Employee';
import EmployeeDetail from './EmployeeDetail';

const PathRouter3 = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/employee" element={<Employee/>} />
        <Route exact path="/detail" element={<EmployeeDetail/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default PathRouter3