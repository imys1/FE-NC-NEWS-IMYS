const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <h4 className="comment-author"> Author: {comment.author}</h4>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">Votes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;
