import React from "react";
import { useEffect, useState } from "react";
import { getArticleByID } from "../src/api";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
    });
  });

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <p className="article-body">{article.body}</p>
      <div className="article-info">
        <p>By {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </div>
    </div>
  );
}
