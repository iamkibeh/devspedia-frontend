import ContactUs from './components/contact-us/ContactUs'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero-section/HeroSection'
import TeamsPage from './components/teamspage/TeamsPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/users/new' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Navbar />
      <HeroSection />
      <TeamsPage />
      <ContactUs />
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
