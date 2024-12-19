import React from "react";
import { useEffect, useState } from "react";
import { getArticleByID } from "../src/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Voting from "./Voting";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;

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
        <Comments article_id={article.article_id} />
        <Voting votes={article.votes} article_id={article.article_id} />
      </div>
    </div>
  );
}
