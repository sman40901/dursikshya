import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import First from "./First"
import Second from "./Second"
import Home from "./Home"
import NoPage from './NoPage'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/First" element={ <First/> } />
            <Route path="/Second" element={ <Second/> } />
            <Route path="/" element={ <Home/> } />
            <Route path="*" element={ <NoPage/> } />
        </Routes>
    </Router>
  )
}

export default MyRoutes