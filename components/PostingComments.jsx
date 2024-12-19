import { postComment } from "../src/api";
import { useState } from "react";

export default function PostingComments({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, newComment, "weegembump").then(
      (newPostedComment) => {
        setComments((currentComments) => {
          return [newPostedComment, ...currentComments];
        });
        setIsSubmitted(false);
      }
    );
    setNewComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Post a comment here:</label>
        {isSubmitted ? (
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        ) : (
          <div>Thanks for commenting!</div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
