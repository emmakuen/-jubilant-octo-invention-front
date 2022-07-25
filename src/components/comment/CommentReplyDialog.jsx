import { Avatar, Button, ButtonContainer, Form, Input } from "..";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { useComments } from "../../contexts/useComments";
import { useState } from "react";

const DialogContainer = styled.div`
  padding-left: calc(${theme.avatarSize} + ${theme.gridColumnGap});
  width: 100%;
`;

const CommentReplyDialog = ({ user, closeDialog, parentId }) => {
  const { postComment } = useComments();
  const [content, setContent] = useState("");
  const handleCloseDialog = () => closeDialog(parentId);
  const handleContentChange = (e) => setContent(e.target.value);
  const handlePostReply = async (e) => {
    e.preventDefault();
    await postComment({ parentId, content });
    setContent("");
    closeDialog(parentId);
  };
  return (
    <DialogContainer data-testid="dialog">
      <Form className="comment-form" autoComplete="off">
        <Link role="button" to="/" aria-label="See user profiles">
          <Avatar src={user?.profilePicUrl} alt={user?.name} scaled />
        </Link>
        <Input
          type="text"
          name="content"
          placeholder="Your reply..."
          value={content}
          onChange={handleContentChange}
          autoFocus
        />
        <ButtonContainer>
          <Button
            secondary
            type="button"
            text="Cancel"
            onClick={handleCloseDialog}
          />
          <Button
            onClick={handlePostReply}
            secondary
            text="Post"
            disabled={!content.length}
          />
        </ButtonContainer>
      </Form>
    </DialogContainer>
  );
};

export default CommentReplyDialog;
