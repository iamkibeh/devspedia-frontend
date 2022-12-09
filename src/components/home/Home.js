import React, { useEffect, useState } from 'react'
import ContactUs from '../contact-us/ContactUs'
import FreeArticles from '../free-articles/FreeArticles'
import HeroSection from '../hero-section/HeroSection'
import TeamsPage from '../teamspage/TeamsPage'

const Home = () => {
  const [ourDevs, setOurDevs] = useState([])


  useEffect(() => {
    fetch('https://devspedia-api-production.up.railway.app/devs')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setOurDevs(data)
      })
  }, [])

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
