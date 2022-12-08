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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/login").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
    // localStorage.setItem('user', `${user.username}`)
  }
  console.log(user)
  const murife=localStorage.getItem("user")
  console.log(murife)
  // function handleLogout() {
  //   setUser(null);
  // }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login handleLogin={handleLogin}/>} />
        <Route path='articles' element={<Article user={user}/>} />
  
        <Route path='about' element={<AboutUs />} />
        <Route path='dev' element={<DevsDashboard />}>
          {/* <Route index element={<DevsDashboard />} /> */}
          <Route path='login' element={<DevLogin />} />
          <Route path='signup' element={<DevSignup />} />
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
