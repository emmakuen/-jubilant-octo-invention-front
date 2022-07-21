const express = require("express");
const router = express.Router();
const userService = require("../services/user");

router.get("/", async (req, res) => {
  const users = await userService.getUsers();
  res.render("index", {
    title: "Choose your profile",
    users,
  });
});

router.post("/user-data", async (req, res) => {
  const { id } = req.body;
  const user = await userService.getUserById(id);
  if (!user) return res.redirect("/");
  res.send(user);
});

module.exports = router;
