import axios from "axios";
import "../assets/Homepage.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://nc-news-czlb.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data);
        console.log(response);
      });
  }, []);
  return (
    <>
      <Navbar />
      <h2>Welcome to NC News™</h2>
      <ul className="flex-container">
        {articles.map((article) => (
          <li key={article.article_id} className="flex-item-homepage">
            <Link to={`/article/${article.article_id}`}>
              <h3>{article.title}</h3>
            </Link>
            <button className="flex-item-homepage-1">+</button>
            {article.votes}
            <button className="flex-item-homepage-1">-</button>
            Comments: {article.comment_count}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homepage;
