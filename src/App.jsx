import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage.jsx";
import Article from "./components/Article";
import CommentsCard from "./components/CommentsCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route
          path="/article/:article_id/comments"
          element={<CommentsCard />}
        />
      </Routes>
    </div>
  );
}

export default App;
