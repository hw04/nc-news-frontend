import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import "../assets/Article.css";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get(`https://nc-news-czlb.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        console.log(response.data);
        setArticle(response.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
};

export default Article;
