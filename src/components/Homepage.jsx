import axios from "axios";
import "../assets/Homepage.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Sorted from "./Sorted";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://nc-news-czlb.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data);
        console.log(response.data);
      });
  }, []);

  const sortByDate = () => {
    let sortedArticles = articles.sort((a, b) => {
      let firstDate = new Date(a.created_at);
      let secondDate = new Date(b.created_at);
      if (firstDate > secondDate) {
        return -1;
      }
      if (firstDate < secondDate) {
        return 1;
      }
    });
    setArticles([...sortedArticles]);
  };

  const sortByCommentHigh = () => {
    let sortedArticles = articles.sort((a, b) => {
      return b.comment_count - a.comment_count;
    });
    setArticles([...sortedArticles]);
  };

  const sortByCommentLow = () => {
    let sortedArticles = articles.sort((a, b) => {
      return a.comment_count - b.comment_count;
    });
    setArticles([...sortedArticles]);
  };

  const sortByVotesHigh = () => {
    let sortedArticles = articles.sort((a, b) => {
      return b.votes - a.votes;
    });
    setArticles([...sortedArticles]);
  };

  const sortByVotesLow = () => {
    let sortedArticles = articles.sort((a, b) => {
      return a.votes - b.votes;
    });
    setArticles([...sortedArticles]);
  };

  const loggedInUser = "grumpy19";

  return (
    <>
      <Navbar />
      <ul className="flex-container-homepage">
        <h2>Welcome to NC News™</h2>
        You are currently logged in as: {loggedInUser}
        <Sorted
          sortByDate={sortByDate}
          sortByCommentHigh={sortByCommentHigh}
          sortByCommentLow={sortByCommentLow}
          sortByVotesHigh={sortByVotesHigh}
          sortByVotesLow={sortByVotesLow}
        />
        {articles.map((article) => (
          <li key={article.article_id} className="flex-item-homepage">
            <Link to={`/article/${article.article_id}`}>
              <h3>{article.title}</h3>
              {new Date(article.created_at).toUTCString()}
              <img
                src={article.article_img_url}
                className="flex-image-homepage"
              ></img>
            </Link>
            Comments: {article.comment_count}
            Votes: {article.votes}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homepage;
