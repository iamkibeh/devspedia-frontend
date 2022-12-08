import React, { useState, useEffect } from 'react'
import OneArticle from '../free-articles/OneArticle'

function Article() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('https://devspedia-api-production.up.railway.app/articles')
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setArticles(data)
      })
  }, [])

  return (
    <>
      {/* {articles.errors} */}
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
    </>
  )
}

export default Article
