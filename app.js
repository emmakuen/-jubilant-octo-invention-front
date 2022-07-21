require("dotenv").config();
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const userRoutes = require("./routes/users");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views/layouts"));
hbs.registerPartials(path.join(__dirname, "./views/partials"));

app.use(express.static(path.join(__dirname, "./public")));
app.use("/", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}...`);
});
