import { useState } from "react";

const Sorted = ({ articles, sortByDate, sortByCommentCount, sortByVotes }) => {
  const [value, setValue] = useState("dateNew");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "votesHigh") {
      sortByVotes(articles);
    }
    if (event.target.value === "dateNew") {
      sortByDate(articles);
    }
    if (event.target.value === "commentHigh") {
      sortByCommentCount(articles);
    }
  };

  return (
    <div className="sorted-container">
      <select value={value} onChange={handleChange}>
        <option value="dateNew">Date (newest first)</option>
        <option value="commentHigh">Comment count (high to low)</option>
        <option value="votesHigh">Votes (high to low)</option>
      </select>
    </div>
  );
};

export default Sorted;
