import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'

function Login({handleLogin }) {
  // const initFormState = {
  //   username: '',
  //   password: '',
  // }
  // const [user, setUser]=useState({})

  // comment 

  // const [formState, setFormState] = useState({})
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const [formData,setFormdata]=useState({username:"",password:""})

  const [formData,setFormdata]=useState({})

  const myRoute = window.location.pathname

  const navigate = useNavigate()

  function handleInput(e) {
    const key = e.target.name
    const value = e.target.value

    setFormdata({ ...formData, [key]: value })

    console.log()
  }
  console.log(formData)

  // const handleSubmit = async (e) => {
  //   console.log(formState)
  //   e.preventDefault()
  //   await fetch('http://127.0.0.1:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formState),
  //   })
  //     .then((resp) => resp.json())
  //     .then((user) => {
  

  //       setLoggedIn(user)
  //       // setFormState(initFormState)
  //       localStorage.setItem('user', user)
  //       console.log(user)
  //       navigate('/articles')

  //       // if (user.error) {
  //       //   alert(user.error)
  //       // } else {
  //       //   setLoggedIn(user)
  //       //   // setFormState(initFormState)
  //       //   localStorage.setItem('user', user)
  //       //   console.log(user)
  //       //   navigate('/articles')
  //       // }

  //     })

  
  // }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) =>{
          handleLogin(user)
          navigate('/articles')
        })

      }
    });
    
  }

  console.log(formData)

  return (
    <>
      <div className='login-parent-container'>
        <div className='login-box'>
          <h3>Login</h3>
          <h4>Welcome to Devspedia</h4>
          <p>Login to explore developer articles</p>
          <div className='devs-login-form'>
            <form onSubmit={handleSubmit} autoComplete='off'>
              <div className='login-inputs-container'>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => { handleInput(e) }}
                />
                <input
                  type='password'
                  name="password"
                  id="username"
                  onChange={(e) => { handleInput(e) }}
                  required
                />
              </div>
              <div className='logins-button-form'>
                <button type='submit'>login</button>
              </div>
            </form>
          </div>
          <div className='login-footer'>
            <div className='register'>
              <p>
                Don't have an account?
                <span>
                  <Link
                    to={myRoute !== '/dev/login' ? '/signup' : '/dev/signup'}
                  >
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
