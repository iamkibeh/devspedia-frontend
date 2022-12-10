import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const OneArticle = ({ article }) => {
	const {
		created_at,
		dev,
		featured_image,
		id,
		likes,
		minutes_to_read,
		title,
		content,
	} = article;
	const [readMore, setReadMore] = useState(false);

	return (
		<Link to={"/articles/" + id} style={{ textDecoration: "none" }}>
			<div className="article-card">
				<div className="article-image">
					<div className="article-image-myimage">
						<img src={featured_image} alt="profile pic" />
					</div>
					<p>
						{dev.fname} {dev.lname}
					</p>
				</div>

				<div className="article-content">
					<div className="article-title">
						<h4>{title}</h4>
					</div>
					<div className="article-description">
						<p>
							{readMore
								? `${article.content}`
								: `${article.content.substring(0, 30)}...`}
						</p>

						<button onClick={() => setReadMore(!readMore)}>
							{readMore ? "show less" : "  read more"}
						</button>
					</div>
					<div className="article-footer">
						<p>{created_at.slice(0, 10)}</p>
						<p>
							{likes} <BsHeart />
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default OneArticle;
