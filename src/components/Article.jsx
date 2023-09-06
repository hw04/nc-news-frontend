import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import "../assets/Article.css";
import CommentsCard from "./CommentsCard";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get(`https://nc-news-czlb.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex-container-article">
        <h1 className="flex-item-article">{article.title}</h1>
        <img src={article.article_img_url} className="flex-image-article"></img>
        <p className="flex-item-article">{article.body}</p>
        <button className="flex-item-homepage-1">+</button>
        {article.votes}
        <button className="flex-item-homepage-1">-</button>
      </div>

      <CommentsCard />
    </>
  );
};

export default Article;
