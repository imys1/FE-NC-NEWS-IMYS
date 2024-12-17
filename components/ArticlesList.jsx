import { useEffect, useState } from "react";
import { getAllArticles } from "../src/api";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
    });
  });

  return (
    <section className="articles-section">
      <ul className="articles-list">
        {articles.map((article) => (
          <p key={article.article_id}>{article.title}</p>
        ))}
      </ul>
    </section>
  );
}
