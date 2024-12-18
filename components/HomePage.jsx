import Header from "./Header.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../src/api.js";
import ArticlesList from "./ArticlesList.jsx";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles()
      .then((articles) => {
        setArticles(articles[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <p>Error loading articles...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/articles">Coding</Link>
        </li>
        <li>
          <Link to="/topics/football">Football</Link>
        </li>
        <li>
          <Link to="/topics/cooking">Cooking</Link>
        </li>
      </ul>
    </div>
  );
}
