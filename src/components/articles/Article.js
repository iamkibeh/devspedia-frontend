import React, { useState, useEffect } from 'react'
import OneArticle from '../free-articles/OneArticle'
import Login from '../login/Login'

function Article({ user, handleLogin }) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(user)

  const token = localStorage.getItem('jwt')
  const username = localStorage.getItem('user')
  console.log(username)
  console.log(token)

  useEffect(() => {
    fetch('https://devspedia-api-production.up.railway.app/articles', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token} `,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setArticles(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [token])
  // console.log(isLoggedIn)
  const subId = localStorage.getItem('user')
  console.log(subId)

  return (
    <>
      {token ? (
        <div className='free-article-container'>
          <div className='free-articles-title'>
            {user && <p className='welcome-user' style={{textAlign: "center",color:"red"}}>Welcome {user.username}</p>}
            <h2>Enjoy Amazing Articles From Our Developers</h2>
          </div>
          <div className='articles-container'>
            {loading ? (
              <div className='loading'>Loading...</div>
            ) : (
              articles.map((article) => (
                <OneArticle key={article.id} article={article} />
              ))
            )}
          </div>
        </div>
      ) : (
        <>
          <h2 style={{textAlign: "center"}}>Become a member to enjoy unlimited access of amazing content from our developers</h2>
          <Login handleLogin={handleLogin} />
        </>
      )}
    </>
  )
}

export default Article
