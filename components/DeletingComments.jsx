import { useState } from "react";
import { deleteComment } from "../src/api";

export default function DeletingComments({ comment_id }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteComment = () => {
    deleteComment(comment_id);
  };

  if (isDeleted) {
    return <div>Thanks for voting!</div>;
  }

  return (
    <section>
      <button
        onClick={() => {
          handleDeleteComment();
          setIsDeleted(true);
        }}
      >
        Delete Comment
      </button>
    </section>
  );
}
