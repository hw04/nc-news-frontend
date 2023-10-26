import { useState } from "react";
import { Select } from "@chakra-ui/react";

const Sorted = ({
  articles,
  sortByDate,
  sortByCommentHigh,
  sortByCommentLow,
  sortByVotesHigh,
  sortByVotesLow,
}) => {
  const [value, setValue] = useState("dateNew");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "votesHigh") {
      sortByVotesHigh(articles);
    }
    if (event.target.value === "votesLow") {
      sortByVotesLow(articles);
    }
    if (event.target.value === "dateNew") {
      sortByDate(articles);
    }
    if (event.target.value === "dateOld") {
      sortByDate(articles);
    }
    if (event.target.value === "commentHigh") {
      sortByCommentHigh(articles);
    }
    if (event.target.value === "commentLow") {
      sortByCommentLow(articles);
    }
  };

  return (
    <Select value={value} onChange={handleChange} maxWidth="150px">
      <option value="dateNew">New</option>
      <option value="dateOld">Old</option>
      <option value="commentHigh">Most comments</option>
      <option value="commentLow">Least comments</option>
      <option value="votesHigh">Votes (high to low)</option>
      <option value="votesLow">Votes (low to high)</option>
    </Select>
  );
};

export default Sorted;
