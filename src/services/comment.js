import api from "./config";
import * as toastHelpers from "../helpers/toast";

const getParentComments = async () => {
  try {
    const response = await api.get("/comments/parents");
    const comments = response.data;
    return comments;
  } catch (err) {
    console.error(err);
    toastHelpers.showErrorMessage(
      "Failed to fetch comments...",
      "getParentComments"
    );
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
    toastHelpers.showErrorMessage(
      "Failed to fetch comments...",
      "getAllComments"
    );
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
    toastHelpers.showErrorMessage(
      "Failed to fetch replies...",
      "getRepliesByParentId"
    );
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
    toastHelpers.showErrorMessage(
      "Failed to fetch replies...",
      "getAllRepliesGroupedByParentId"
    );
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
    toastHelpers.showErrorMessage(
      "Failed to post the comment...",
      "postComment"
    );
  }
};

export {
  getParentComments,
  getRepliesByParentId,
  getAllRepliesGroupedByParentId,
  getAllComments,
  postComment,
};
