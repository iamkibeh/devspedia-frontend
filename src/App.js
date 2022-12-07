import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Article from './components/articles/Article'
import AboutUs from './components/about-us/AboutUs'
import Home from './components/home/Home'
import DevsDashboard from './components/dashboard/DevsDashboard'
import User from './components/dev/Devs'
import Profile from './components/dashboard/Profile'
import DevArticles from './components/dev/DevArticles'
import MyArticles from './components/dev/MyArticles'
import DevLogin from './components/dev/DevLogin'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='articles' element={<Article />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='dev' element={<DevsDashboard />}>
          {/* <Route index element={<DevsDashboard />} /> */}
          <Route path='login' element={<DevLogin />} />
          <Route path=':id/dashboard/profile' element={<Profile />} />
          <Route path=':id/articles/create' element={<DevArticles />} />
          <Route path=':id/articles' element={<MyArticles />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
