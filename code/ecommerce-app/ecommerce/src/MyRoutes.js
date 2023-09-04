
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='products' element={<Product />} />
            <Route path='register' element={<Register />} />
            <Route path='productdetails/:productId' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default MyRoutes;
