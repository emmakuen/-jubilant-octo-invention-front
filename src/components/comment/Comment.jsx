import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Avatar, Button, ButtonContainer } from "..";
import CommentContainer from "./CommentContainer";
import CommentInfo from "./CommentInfo";
import * as commentsHelpers from "../../helpers/comment";
import { useComments } from "../../contexts/useComments";
import * as socketConnection from "../../socket/socketConnection";
import { useState, useEffect } from "react";

const CommentAvatarContainer = styled.div`
  grid-row: span 3;
`;

const CommentBody = styled.p`
  grid-column: 2 / -1;
  line-height: 1.7;
`;

const Comment = ({
  comment,
  isParent,
  isReply,
  openDialog,
  isDialogOpen,
  user,
  parentId,
}) => {
  const [currentComment, setCurrentComment] = useState(comment);

  useEffect(() => {
    socketConnection.listenForToggleUpvote(
      comment.id,
      user.id,
      setCurrentComment
    );

    return () => socketConnection.removeToggleUpvoteListener();
  }, [comment.id, user.id]);

  const { toggleCommentLike } = useComments();
  const handleUpvote = async () => await toggleCommentLike(comment.id);
  const handleDialogOpen = () => openDialog(parentId ? parentId : comment.id);

  return (
    <CommentContainer isParent={isParent} isReply={isReply}>
      <CommentAvatarContainer>
        <Link role="button" to="/" aria-label="See user profiles">
          <Avatar
            src={comment.author.profilePicUrl}
            alt={comment.author.name}
            scaled
          />
        </Link>
      </CommentAvatarContainer>
      <CommentInfo comment={comment} isReply={isReply} />
      <CommentBody>{comment.content}</CommentBody>
      <ButtonContainer>
        <Button
          onClick={handleUpvote}
          text={commentsHelpers.formatUpvoteText(currentComment.likes.length)}
          secondary
          isLiked={currentComment.isLikedByUser}
        />
        <Button
          onClick={handleDialogOpen}
          text="Reply"
          secondary
          disabled={isDialogOpen}
        />
      </ButtonContainer>
    </CommentContainer>
  );
};

export default Comment;
