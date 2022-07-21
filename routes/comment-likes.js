const express = require("express");
const router = express.Router();
const commentLikeService = require("../services/commentLike");

router.post("/", async (req, res) => {
  try {
    const { commentId, userId } = req.body;
    const data = await commentLikeService.toggleCommentLike({
      commentId,
      userId,
    });

    if (data) {
      res.send(JSON.stringify(data));
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
