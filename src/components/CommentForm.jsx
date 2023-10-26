import { useState } from "react";
import "../assets/CommentForm.css";
import { Textarea, Button } from "@chakra-ui/react";

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
      <Textarea
        placeholder="Leave a comment..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button disabled={textDisabled}>{label}</Button>
    </form>
  );
};

export default CommentForm;
