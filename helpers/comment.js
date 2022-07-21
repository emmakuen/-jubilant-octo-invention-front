const populateComments = (comments, replies, userId) => {
  return comments.map((comment) => {
    comment.isLikedByUser = comment.likes.some(
      (like) => like.userId === userId
    );
    comment.likeClassName = comment.isLikedByUser ? "liked" : "";
    comment.likeCount = comment.likes.length;
    if (comment.id in replies) {
      comment.className = "nested";
      comment.replies = replies[comment.id].map((reply) => {
        reply.isLikedByUser = reply.likes.some(
          (like) => like.userId === userId
        );
        reply.likeClassName = reply.isLikedByUser ? "liked" : "";
        reply.likeCount = reply.likes.length;
        return reply;
      });
      comment.isParent = true;
    } else {
      comment.className = "not-nested";
    }
    return comment;
  });
};

const getParentId = (parentId, id) => {
  if (parentId) return parentId;
  return id;
};

module.exports = {
  populateComments,
  getParentId,
};
