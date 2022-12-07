import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Article from './components/articles/Article'
import AboutUs from './components/about-us/AboutUs'
import Home from './components/home/Home'
// import DevsDashboard from './components/dashboard/DevsDashboard'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/articles' element={<Article />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      {/* <DevsDashboard /> */}

      <Footer />
    </>
  )
}

export default App
