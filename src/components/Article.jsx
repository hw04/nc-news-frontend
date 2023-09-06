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
      <div className="flexbox-container-article">
        <h1 className="flexbox-item-article">{article.title}</h1>
        <img src={article.article_img_url}></img>
        <p className="flexbox-item-article">{article.body}</p>
      </div>
      <CommentsCard />
    </>
  );
};

export default Article;
