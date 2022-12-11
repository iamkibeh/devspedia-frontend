import React, { useEffect, useState } from 'react'
import './free-articles.css'
import { useInView } from 'react-intersection-observer'
import OneArticle from './OneArticle'
import { useNavigate } from 'react-router-dom'

const FreeArticles = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    // rootMargin: '-200px'
  })
  const navigate = useNavigate()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://devspedia-api-production.up.railway.app/freearticles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data)
      })
  }, [])

  const handleReadMoreClick = () => {
    navigate('/articles')
  }
  return (
    <>
      <div className='free-article-container'>
        <div className='free-articles-title'>
          <h1>Latest from DevsPedia</h1>
        </div>
        <div className={inView ? 'articles-container' : null} ref={ref}>
          {/* <OneArticle />
          <OneArticle />
          <OneArticle /> */}
          {articles.map((article) => {
            return <OneArticle key={article.id} article={article} />
          })}
        </div>
        <div className='show-more-button'>
          <button onClick={handleReadMoreClick}>read more</button>
        </div>
      </div>
    </>
  )
}

export default FreeArticles
