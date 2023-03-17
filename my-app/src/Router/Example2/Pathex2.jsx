import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "../Example2/Category";
import Product from "../Example2/Product";

function Pathex2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product/:categoryId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Pathex2;