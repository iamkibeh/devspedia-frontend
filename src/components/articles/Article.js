// import React,{ useState,useEffect } from 'react'
import React, {useState, useEffect} from "react"
import { useInView } from 'react-intersection-observer'


function Article() {
   
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0,
      // rootMargin: '-200px'
    })

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    fetch('/articles')
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      setArticles(data)
    })
  },[])

const data=articles.map((article)=>(
  <div className={inView ? 'articles-container' : null} ref={ref}>
    <img src={article.featured_image} alt='Oops'/>
    <h3 className='free-articles-title'>Title:{article.title}</h3>
    <p>{article.content}</p>
    <button className='show-more-button'>Likes:{article.likes}</button>
  </div>
))

  return (
    <div className='free-article-container'>
      {data}
{/* //<Article articles={console.log(articles)} /> */}
    </div>
  );
}

export default Article
