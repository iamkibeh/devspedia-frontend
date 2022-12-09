import React, { useState, useEffect } from 'react'
import OneArticle from '../free-articles/OneArticle'

function Article({user}) {
  const [articles, setArticles] = useState([])
  // useEffect(() => {
  //   fetch('/articles')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data)
  //       setArticles(data)
  //     })
  // }, [])


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
