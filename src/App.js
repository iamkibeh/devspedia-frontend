import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import React, { useState } from 'react'
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
import DevSignup from './components/dev/DevSignup'
import { useEffect } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import ContactUs from './components/contact-us/ContactUs'

function App() {
  const [user, setUser] = useState(null)

  const subId = parseInt(localStorage.getItem('user'))

  const token = localStorage.getItem('jwt')

  useEffect(() => {
    fetch(
      `https://devspedia-api-production.up.railway.app/subscribers/${subId}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((user) => {
            setUser(user)
            console.log(user.username)
            // window.localStorage.setItem('user', `${user.username}`)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }, [subId])

  function handleLogin(user) {
    setUser(user)
    reactLocalStorage.setObject('users', user)
  }
  // function handleLogout() {
  //   setUser(null);
  // }

  function handleDevLogin(dev) {
    // console.log('you have handled a dev logged in call back')
    setUser(dev)
    fetch('https://devspedia-api-production.up.railway.app/devs').then(
      (response) => {
        if (response.ok) {
          return response.json().then((data) => {
            console.log(data)
            const myDev = data.find((dev) => dev.username)
            // console.log(myDev)
          })
        }
      }
    )
  }
  return (
    <>
      <div className='body-container'>
        <div className='content-wrap'>
          {window.location.pathname !== '/dev' && <Navbar />}
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login handleLogin={handleLogin} />} />
            <Route
              path='articles'
              element={<Article user={user} handleLogin={handleLogin} />}
            />

            <Route path='about' element={<AboutUs />} />
            <Route path='contact_us' element={<ContactUs />} />
            <Route path='dev' element={<DevsDashboard user={user} />}>
              {/* <Route index element={<DevsDashboard />} /> */}
              <Route
                path=''
                index
                element={<DevLogin handleDevLogin={handleDevLogin} />}
              />
              <Route path='signup' element={<DevSignup />} />
              <Route path=':id/dashboard/profile' element={<Profile />} />
              <Route path=':id/articles/create' element={<DevArticles />} />
              <Route path=':id/articles' element={<MyArticles />} />
            </Route>
            <Route path='*' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
