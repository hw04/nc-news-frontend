import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/CommentsCard.css";

const CommentsCard = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://nc-news-czlb.onrender.com/api/articles/${article_id}/comments`
      )
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  return (
    <div className="comments-container">
      <h2>What people are saying...</h2>
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.comment_id} className="comments-list-item">
            {comment.author}: {comment.body}
          </li>
        ))}
      </ul>
      Leave a comment... <input name="Write a comment" />{" "}
      <button title="Submit">Submit</button>
    </div>
  );
};

export default CommentsCard;
