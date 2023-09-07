import { useState } from "react";
import "../assets/CommentForm.css";

const CommentForm = ({ label, handleSubmit }) => {
  const [text, setText] = useState("");
  const textDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="comment-form-button" disabled={textDisabled}>
        {label}
      </button>
    </form>
  );
};

export default CommentForm;
