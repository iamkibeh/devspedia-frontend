
// import React,{ useState,useEffect } from 'react'

// function Article() {

//   const [articles, setArticles] = useState([])
//   useEffect(()=>{
//     fetch('/articles')
//     .then(r=>r.json())
//     .then(data=>{
//       console.log(data)
//       setArticles(data)
//     })
//   },[])

// const data=articles.map((article)=>(
//   <div>
//     <img src={article.featured_image} alt='Oops'/>
//     <h3>Title:{article.title}</h3>
//     <p>{article.content}</p>
//     <button>Likes:{article.likes}</button>
//   </div>
// ))

//   return (
//     <div className="App">
//       {data}
// {/* //<Article articles={console.log(articles)} /> */}
//     </div>
//   );
// }

// export default Article
