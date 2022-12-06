
import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero-section/HeroSection'
import TeamsPage from './components/teamspage/TeamsPage'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <TeamsPage />
      <Footer />
    </BrowserRouter>
  )
}

export default App
