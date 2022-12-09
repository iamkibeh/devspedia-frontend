import React, { useState, useEffect } from 'react'
import OneArticle from '../free-articles/OneArticle'
import { useNavigate } from 'react-router-dom'

function Article({user}) {
  const [articles, setArticles] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://devspedia-api-production.up.railway.app/articles')
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors)
          return navigate('/login')
        }

        console.log(data)
        setArticles(data)
      })
  }, [])


const user1 = window.localStorage.getItem("user")
console.log(user1)
  return (

    <>

    {user?
      <div className='free-article-container'>
        <div className='free-articles-title'>
          <h2>Welcome to our articles pages</h2>
        </div>
        {/* <div className='articles-container'>
        {
          articles.map(article => <OneArticle key={article.id} article = {article}/> )
        }
      </div> */}
      </div>
:<h1>UNAUTHORIZED!!!!!!!</h1>}
    </>
  )
}

export default Article
