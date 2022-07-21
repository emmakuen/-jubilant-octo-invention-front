const api = require("./config");

const getCommentLikesGroupedById = async () => {
  try {
    const response = await api.get("/comment-likes");
    const commentLikes = response.data;
    return commentLikes;
  } catch (err) {
    console.log(err);
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
  }
};

module.exports = {
  getCommentLikesGroupedById,
  toggleCommentLike,
};
