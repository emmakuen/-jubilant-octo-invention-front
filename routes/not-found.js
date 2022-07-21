const express = require("express");
const router = express.Router();

router.get("*", (req, res) => {
  res.render("notfound", {
    title: "Page Not Found",
  });
});

module.exports = router;
