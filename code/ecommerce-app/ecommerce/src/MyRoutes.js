
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Register from "./pages/Register";

const MyRoutes = () => {
  return (
    <>
     <Router>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='products' element={<Product/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
     </Router>
    </>
  );
}

export default MyRoutes;
