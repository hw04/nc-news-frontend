import "../assets/Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src="https://t3.ftcdn.net/jpg/05/71/08/24/360_F_571082432_Qq45LQGlZsuby0ZGbrd79aUTSQikgcgc.jpg" />
      </div>
      <div className="comment-right-part">
        <div className="comment-info">
          <div className="comment-author">{comment.author}</div>
          <div>{Date(comment.created_at)} </div>
        </div>
        <div className="comment-body">{comment.body}</div>
      </div>
    </div>
  );
};

export default Comment;
