const api = require("./config");

const getParentComments = async () => {
  try {
    const response = await api.get("/comments/parents");
    const comments = response.data;
    return comments;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getAllComments = async () => {
  try {
    const response = await api.get("/comments");
    const comments = response.data;
    return comments;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getRepliesByParentId = async (id) => {
  try {
    const response = await api.get(`/comments/replies/${id}`);
    const replies = response.data;
    return replies;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getAllRepliesGroupedByParentId = async () => {
  try {
    const response = await api.get("/comments/replies");
    const replies = response.data;
    return replies;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const postComment = async ({ content, parentId = null, authorId }) => {
  try {
    const response = await api.post("/comments", {
      content,
      parentId,
      authorId,
    });
    const comment = response.data;
    return comment;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getParentComments,
  getRepliesByParentId,
  getAllRepliesGroupedByParentId,
  getAllComments,
  postComment,
};
