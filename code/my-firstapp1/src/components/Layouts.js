import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* outlet is used to place a child element  */}
    <Footer/>
    </>
  )
}

export default Layouts