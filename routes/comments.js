const express = require("express");
const router = express.Router();
const commentService = require("../services/comment");
const userService = require("../services/user");
const commentHelpers = require("../helpers/comment");

router.get("/", async (req, res) => {
  const id = parseInt(req.query.id);
  const user = await userService.getUserById(id);
  if (!user) return res.redirect("/");
  let comments = await commentService.getParentComments();
  const replies = await commentService.getAllRepliesGroupedByParentId();

  comments = commentHelpers.populateComments(comments, replies, id);

  res.render("comments", {
    title: "Discussion",
    user,
    comments,
  });
});

router.post("/", async (req, res) => {
  try {
    let { id, content, parentId } = req.body;
    parentId = parentId ? JSON.parse(parentId) : null;
    const result = await commentService.postComment({
      content,
      authorId: JSON.parse(id),
      parentId,
    });
    if (result) {
      res.redirect(`/comments?id=${id}`);
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
