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
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
