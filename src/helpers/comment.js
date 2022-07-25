const populateComments = (comments, replies, userId) => {
  return comments.map((comment) => {
    comment.isLikedByUser = comment.likes.some(
      (like) => like.userId === userId
    );
    if (comment.id in replies) {
      comment.replies = replies[comment.id].map((reply) => {
        reply.isLikedByUser = reply.likes.some(
          (like) => like.userId === userId
        );
        return reply;
      });
    }
    return comment;
  });
};

const populatePostedComment = (comment, user) => {
  comment.isLikedByUser = false;
  comment.likes = [];
  comment.author = user;
  return comment;
};

const populateUpvotedComment = (comment, userId) => {
  comment.isLikedByUser =
    comment.likes && comment.likes.some((like) => like.userId === userId);
  return comment;
};

const updateComments = (comments, parentId, reply) => {
  const commentsCopy = [...comments];
  const parentIndex = commentsCopy.findIndex(
    (comment) => comment.id === parentId
  );
  if (parentIndex === -1) return;

  const parentComment = commentsCopy[parentIndex];
  if (!("replies" in parentComment)) {
    parentComment.replies = [reply];
  } else {
    // add the posted comment last to display it in ascending order
    parentComment.replies = [...parentComment.replies, reply];
  }

  return commentsCopy;
};

const formatUpvoteText = (likeCount) => {
  if (!likeCount) return "▲ Upvote";
  if (likeCount === 1) return "▲ 1 Upvote";
  return `▲ ${likeCount} Upvotes`;
};

export {
  populateComments,
  populatePostedComment,
  formatUpvoteText,
  updateComments,
  populateUpvotedComment,
};
