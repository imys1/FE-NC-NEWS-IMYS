import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../src/api";
import CommentCard from "./CommentCard";
import PostingComments from "./PostingComments";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comment) => {
      setComments(comment);
      setIsLoading(false);
    });
  }, [article_id]);

  // if (isLoading) {
  //   return <p>Loading comments...</p>;
  // }

  return (
    <section className="comments-section">
      <h3>Comments ({comments.length})</h3>
      <PostingComments article_id={article_id} setComments={setComments} />
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      )}
    </section>
  );
}
