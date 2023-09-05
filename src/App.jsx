import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage.jsx";
import Article from "./components/Article";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
