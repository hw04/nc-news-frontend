import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/CommentsCard.css";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentsCard = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const addComment = (text) => {
    axios.post(
      `https://nc-news-czlb.onrender.com/api/articles/${article_id}/comments`,
      { username: "grumpy19", body: text }
    );
  };
  useEffect(() => {
    axios
      .get(
        `https://nc-news-czlb.onrender.com/api/articles/${article_id}/comments`
      )
      .then((response) => {
        setComments(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="flex-container-comments">
      <h2>What people are saying...</h2>
      <div className="post-comment-field">Leave a comment...</div>
      <CommentForm label="Submit comment" handleSubmit={addComment} />
      <div className="comments-container"></div>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default CommentsCard;
