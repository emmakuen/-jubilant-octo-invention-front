import { createContext, useContext, useState, useCallback } from "react";
import * as commentService from "../services/comment";
import * as commentHelpers from "../helpers/comment";
import { useUsers } from "./useUsers";
import * as commentLikeService from "../services/commentLike";
import * as socketConnection from "../socket/socketConnection";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useUsers();

  const postComment = async ({ content, parentId = null }) => {
    try {
      const postedComment = await commentService.postComment({
        content,
        authorId: user.id,
        parentId,
      });
      const populatedComment = commentHelpers.populatePostedComment(
        postedComment,
        user
      );

      if (!parentId) {
        // add the posted comment first to show it in descending order
        setComments([populatedComment, ...comments]);
      } else {
        const updatedComments = commentHelpers.updateComments(
          comments,
          parentId,
          populatedComment
        );
        setComments(updatedComments);
      }
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  const fetchComments = useCallback(async () => {
    try {
      const commentsData = await commentService.getParentComments();
      const repliesData = await commentService.getAllRepliesGroupedByParentId();
      const populatedComments = commentHelpers.populateComments(
        commentsData,
        repliesData,
        user?.id
      );
      setComments(populatedComments);
      console.log(populatedComments);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  }, [user?.id]);

  const toggleCommentLike = async (commentId) => {
    if (!commentId) return;
    try {
      await commentLikeService.toggleCommentLike({
        commentId,
        userId: user.id,
      });

      // update in realtime about the upvote
      socketConnection.emitToggleUpvote({ commentId, userId: user.id });
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        error,
        postComment,
        toggleCommentLike,
        fetchComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
