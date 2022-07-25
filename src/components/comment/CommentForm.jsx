import React, { useState } from "react";
import { Avatar, Button, Form, Input } from "..";
import { Link } from "react-router-dom";

const CommentForm = ({ user, postComment }) => {
  const [content, setContent] = useState("");
  const handleChange = (e) => setContent(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postComment({ content });
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Link role="button" to="/" aria-label="See user profiles">
        <Avatar src={user?.profilePicUrl} alt={user?.name} scaled />
      </Link>
      <label className="sr-only" htmlFor="comment-input">
        Your Comment
      </label>
      <Input
        type="text"
        id="comment-input"
        placeholder="What are your thoughts?"
        value={content}
        onChange={handleChange}
        autoFocus
        required
      />
      <Button type="submit" text="Comment" primary />
    </Form>
  );
};

export default CommentForm;
