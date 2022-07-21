require("dotenv").config();
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const userRoutes = require("./routes/users");
const commentRoutes = require("./routes/comments");
const commentLikeRoutes = require("./routes/comment-likes");
const notFoundRoute = require("./routes/not-found");

const dateTimeHelpers = require("./helpers/datetime");
const commentHelpers = require("./helpers/comment");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views/layouts"));
hbs.registerPartials(path.join(__dirname, "./views/partials"));
hbs.registerHelper("formatTimestamp", dateTimeHelpers.useRelativeTime);
hbs.registerHelper("getParentId", commentHelpers.getParentId);

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", userRoutes);
app.use("/comments", commentRoutes);
app.use("/like-comment", commentLikeRoutes);
app.use("*", notFoundRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}...`);
});
