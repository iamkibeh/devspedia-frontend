import React, { useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import OneArticle from "../free-articles/OneArticle";
import Login from "../login/Login";

function Article({ user, loggedInUsers, handleLogin }) {
	const [articles, setArticles] = useState([]);

	// const isLoggedIn = reactLocalStorage.getObject('users').success
	console.log(user);

	const token = localStorage.getItem("jwt");
	const username = localStorage.getItem("user");
	console.log(username);
	console.log(token);

	useEffect(() => {
		fetch("http://127.0.0.1:3000/articles", {
			method: "GET",
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${token} `,
			},
		})
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				setArticles(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	console.log(reactLocalStorage.getObject("users"));
	// console.log(isLoggedIn)
	const subId = localStorage.getItem("user");

	console.log(subId);

	return (
		<>
			{token ? (
				<div className="free-article-container">
					<div className="free-articles-title">
						<h2>welcome {user.username}</h2>
						<h2>Here are our articles</h2>
					</div>
					<div className="articles-container">
						{articles.map((article) => (
							<OneArticle key={article.id} article={article} />
						))}
					</div>
				</div>
			) : (
				<>
					<h2>Login first to access the articles</h2>
					<Login handleLogin={handleLogin} />
				</>
			)}
		</>
	);
}

export default Article;
