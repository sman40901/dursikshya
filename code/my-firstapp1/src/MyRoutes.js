import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import First from "./First"
// import Second from "./Second"
import Home from "./pages/Home";
// import NoPage from "./NoPage"
// import { Third, LoginForm } from "./Third"
import Layouts from "./components/Layouts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import TestNav from "./redux/TestNav";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/First" element={ <First/> } />
            <Route path="/Second" element={ <Second/> } />
            <Route path="/Third" element={ <Third/> } />
            <Route path="/Home" element={ <Home/> } />
            <Route path="/Login" element={ <LoginForm/> } />
            <Route path="/" element={ <Home/> } />
            <Route path="*" element={ <NoPage/> } /> */}
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="productdetails/:productId" element={<ProductDetails />} /> 
          {/* : varname indicates query string parameter */}
          <Route path="cart" element={<Cart />} /> 
          <Route path="redux/cart" element={<TestNav/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
