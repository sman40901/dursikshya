import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ForgotPassword from './pages/ForgotPassword'
import Products from './pages/Products'
import EmailVerify from './auth/EmailVerify'

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts/>}>
          <Route index element={<HomePage/>}/>
          <Route path='signup' element={<Register/>}/>
          <Route path='signin' element={<Login/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='forgotpassword' element={<ForgotPassword/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='email/confirmation/:token' element={<EmailVerify/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes