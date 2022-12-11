import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'

function Login({ handleLogin, action = '' }) {
  const [errors, setErrors] = useState('')

  const [formData, setFormdata] = useState({})

  const myRoute = window.location.pathname

  const navigate = useNavigate()

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

  function handleInput(e) {
    const key = e.target.name
    const value = e.target.value

    setErrors('')
    setFormdata({ ...formData, [key]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(action)

    action
      ? fetch('https://devspedia-api-production.up.railway.app/logindev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          if (res.ok) {
            return res.json().then((user) => {
              console.log(user)
              handleLogin.handleDevLogin(user)
              localStorage.setItem('dev-token', user.jwt)
              localStorage.setItem('dev', user.dev.id)
              navigate(`/dev/${user.dev.id}/articles`)
              window.location.reload()
            })
          }
        })
      : fetch(
          'https://devspedia-api-production.up.railway.app/login-subscriber',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        )
          .then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                console.log('i have logged in')
                console.log(r.headers)
                handleLogin(user)
                localStorage.setItem('jwt', user.jwt)
                localStorage.setItem('user', `${user.subscriber.id}`)
                navigate('/articles')
                window.location.reload()
              })
            } else {
              r.json().then((err) => {
                setErrors(err.errors)
              })
            }
          })
          .catch((err) => console.log(err))
  }

  console.log(errors)

  const token = localStorage.getItem('jwt')
  const subId = localStorage.getItem('user')

  console.log(token)
  console.log(subId)
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
                  type='text'
                  name='username'
                  id='username'
                  onChange={(e) => {
                    handleInput(e)
                  }}
                  placeholder='Username'
                />
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={(e) => {
                    handleInput(e)
                  }}
                  required
                  placeholder='Password'
                />
              </div>
              <div className='logins-button-form'>
                <button type='submit'>login</button>
              </div>
            </form>
          </div>
          <div className='login-footer'>
            <p style={{ color: 'red', fontStyle: 'italic' }}>
              {errors && `${errors}!`}
            </p>
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
