import { io } from "socket.io-client";
import * as commentHelpers from "../helpers/comment";

const UPVOTE_RECEIVED_EVENT = "comment-upvote-updated";
const UPVOTE_EMIT_EVENT = "upvote";

let socket;

export const connectWithSocketServer = () => {
  socket = io(process.env.REACT_APP_API_URL);

  socket.on("connect", () => {
    // console.log(`Connected to socket.io server with id ${socket.id}...`);
  });
};

export const getSocketInstance = () => {
  return socket;
};

export const emitToggleUpvote = ({ commentId, userId }) => {
  socket.emit(UPVOTE_EMIT_EVENT, { commentId, userId });
};

export const listenForToggleUpvote = (commentId, userId, setCurrentComment) => {
  socket.on(UPVOTE_RECEIVED_EVENT, (upvotedComment) => {
    if (upvotedComment.id !== commentId) return;
    const populatedComment = commentHelpers.populateUpvotedComment(
      upvotedComment,
      userId
    );

    setCurrentComment(populatedComment);
  });
};

export const removeToggleUpvoteListener = () => {
  socket.off(UPVOTE_RECEIVED_EVENT, listenForToggleUpvote);
};
