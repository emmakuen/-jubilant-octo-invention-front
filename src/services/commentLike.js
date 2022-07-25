import api from "./config";
import * as toastHelpers from "../helpers/toast";

const getCommentLikesGroupedById = async () => {
  try {
    const response = await api.get("/comment-likes");
    const commentLikes = response.data;
    return commentLikes;
  } catch (err) {
    console.error(err);
    toastHelpers.showErrorMessage("Failed to fetch upvotes...");
    return [];
  }
};

const toggleCommentLike = async ({ commentId, userId }) => {
  try {
    const response = await api.post("/comment-likes", {
      commentId,
      userId,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    toastHelpers.showErrorMessage(
      "Failed to post the upvote...",
      "toggleError"
    );
  }
};

export { getCommentLikesGroupedById, toggleCommentLike };
