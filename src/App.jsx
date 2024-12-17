import { useState } from "react";

import "../src/App.css";
import Header from "../components/Header";
import ArticlesList from "../components/ArticlesList";
import SingleArticle from "../components/SingleArticle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />

        {/* <ArticlesList></ArticlesList>
        <SingleArticle></SingleArticle> */}
      </Routes>
    </div>
  );
}

export default App;
