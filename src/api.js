import axios from "axios";

const request = axios.create({
  baseURL: "https://backend-project-tkj2.onrender.com/api",
});

export const getAllArticles = (topic, sortBy, order) => {
  return request
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: order,
      },
    })
    .then((data) => {
      console.log(data.data.articles);
      return data.data.articles;
    });
};

export const getArticleByID = (article_id) => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return request
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
