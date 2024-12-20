import { useEffect, useState } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { getAllArticles } from "../src/api";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const { topic } = useParams();

  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getAllArticles(topic, sortBy, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  if (isLoading) return <p>Loading articles...</p>;

  return (
    <div>
      <h1>Articles</h1>
      <div>
        <label>Sort by: </label>
        <select
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <label>Order: </label>
        <select
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
            <p>Author: {article.author}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <p>Date: {new Date(article.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

//   return (
//     <section className="articles-section">
//       <ul className="articles-list">
//         {articles.map((article) => (
//           <li key={article.article_id}>
//             <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
//           </li>
//           //   <p key={article.article_id}>{article.title}</p>
//         ))}
//       </ul>
//     </section>
//   );
//
