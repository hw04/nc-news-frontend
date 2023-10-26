import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/CommentsCard.css";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { Heading } from "@chakra-ui/react";

const CommentsCard = () => {
  const loggedInUser = "grumpy19";
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const addComment = (text) => {
    axios
      .post(
        `https://nc-news-czlb.onrender.com/api/articles/${article_id}/comments`,
        { username: loggedInUser, body: text }
      )
      .then((response) => {
        setComments((currentComments) => {
          return [response.data.comment, ...currentComments];
        });
      });
  };

  const deleteComment = (comment) => {
    axios
      .delete(
        `https://nc-news-czlb.onrender.com/api/comments/${comment.comment_id}`
      )
      .then(
        setComments((currentComments) => {
          return [
            ...currentComments.filter(
              (individualComment) =>
                individualComment.comment_id !== comment.comment_id
            ),
          ];
        })
      );
  };

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
    <>
      <CommentForm label="Submit comment" handleSubmit={addComment} />
      <Heading as="h2">What people are saying...</Heading>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          loggedInUser={loggedInUser}
          deleteComment={deleteComment}
          key={comment.comment_id}
        />
      ))}
    </>
  );
};

export default CommentsCard;
