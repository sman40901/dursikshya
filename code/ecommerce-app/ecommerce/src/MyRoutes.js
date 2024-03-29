
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { EmailVerify } from "./auth/EmailVerify";
import Signin from "./pages/Signin";
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./admin/Dashboard";
import NotFound from "./pages/NotFound";

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='products' element={<Product />} />
            <Route path='register' element={<Register />} />
            <Route path='signin' element={<Signin />} />
            <Route path='productdetails/:productId' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='email/confirmation/:token' element={<EmailVerify />} />
          </Route>
          {/* admin route  */}
          <Route path="/admin" element={<AdminRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default MyRoutes;
