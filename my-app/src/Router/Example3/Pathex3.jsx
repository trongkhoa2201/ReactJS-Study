import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "../Example3/Category";
import Product from "../Example3/Product";

function Pathex3() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pathex3;