import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import "../assets/Article.css";
import CommentsCard from "./CommentsCard";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  useEffect(() => {
    axios
      .get(`https://nc-news-czlb.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://nc-news-czlb.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setVotes(response.data.votes);
      });
  }, []);

  const handleVoteIncrease = () => {
    setVotes((currentVotes) => currentVotes + 1);
    axios.patch(
      `https://nc-news-czlb.onrender.com/api/articles/${article_id}`,
      {
        inc_votes: 1,
      }
    );
  };

  const handleVoteDecrease = () => {
    setVotes((currentVotes) => currentVotes - 1);
    axios.patch(
      `https://nc-news-czlb.onrender.com/api/articles/${article_id}`,
      {
        inc_votes: -1,
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex-container-article">
        <h1 className="flex-item-article">{article.title}</h1>
        <img src={article.article_img_url} className="flex-image-article"></img>
        <p className="flex-item-article">{article.body}</p>
        <div>
          <button onClick={handleVoteIncrease} className="flex-item-homepage-1">
            +
          </button>
          Votes: {votes}
          <button onClick={handleVoteDecrease} className="flex-item-homepage-1">
            -
          </button>
        </div>
      </div>

      <CommentsCard />
    </>
  );
};

export default Article;
