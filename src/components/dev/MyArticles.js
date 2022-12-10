import React, { useEffect, useState } from 'react'
import OneArticle from '../free-articles/OneArticle'

const MyArticles = () => {
  const [articles, setArticles] = useState([])
  const dev = localStorage.getItem('dev')
  const token = localStorage.getItem('dev-token')
  console.log(dev)

  useEffect(() => {
    fetch(`https://devspedia-api-production.up.railway.app/devs/${dev}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('hello you are in one articke')
        console.log(data)
        setArticles(data.articles)
      })
  }, [dev, token])
  return (
    <>
      <div className='articles-container'>
        {articles.length ? (
          articles.map((article) => (
            <OneArticle key={article.id} article={article} />
          ))
        ) : (
          <div className='no-articles'>
            <h2>You have no articles</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default MyArticles
