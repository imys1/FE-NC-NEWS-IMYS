import { useEffect, useState } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { getAllArticles } from "../src/api";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  const { topic } = useParams();
  console.log(topic);

  useEffect(() => {
    getAllArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <section className="articles-section">
      <ul className="articles-list">
        {articles.map((article) => (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          </li>
          //   <p key={article.article_id}>{article.title}</p>
        ))}
      </ul>
    </section>
  );
}
