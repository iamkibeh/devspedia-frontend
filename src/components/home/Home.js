import React from 'react'
import ContactUs from '../contact-us/ContactUs'
import FreeArticles from '../free-articles/FreeArticles'
import HeroSection from '../hero-section/HeroSection'
import TeamsPage from '../teamspage/TeamsPage'

const Home = () => {
  return (
    <>
      <HeroSection />
      <FreeArticles />
      <TeamsPage />
      <ContactUs />
    </>
  )
}

export default Home
