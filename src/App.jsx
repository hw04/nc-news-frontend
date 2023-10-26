import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import Article from "./pages/Article";
import CommentsCard from "./components/CommentsCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/article/:article_id" element={<Article />} />
      <Route path="/article/:article_id/comments" element={<CommentsCard />} />
    </Routes>
  );
}

export default App;
