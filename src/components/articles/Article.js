import React, { useState, useEffect } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import OneArticle from '../free-articles/OneArticle'
import Login from '../login/Login'

function Article({ user, loggedInUsers, handleLogin }) {
  const [articles, setArticles] = useState([])
  // const [loggedIn, setIsLoggedIn] = useState(false)
  console.log(loggedInUsers)

  useEffect(() => {
    fetch('/articles')
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setArticles(data)
      })
  }, [])
  console.log(reactLocalStorage.getObject('users').success)

  return (
    <>
      {reactLocalStorage.getObject('users').success ? (
        <div className='free-article-container'>
          <div className='free-articles-title'>
            <h2> {reactLocalStorage.getObject('users').success}</h2>
          </div>
          <div className='articles-container'>
        {
          articles.map(article => <OneArticle key={article.id} article = {article}/> )
        }
      </div>
        </div>
      ) : (
        <>
          <h2>Login first to access the articles</h2>
          <Login handleLogin={handleLogin} />
        </>
      )}
    </>
  )
}

export default Article
