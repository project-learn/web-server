const express = require("express");
const app = express.Router();

const auth = require("../../server/authentication/main.js");
//auth.login();

app.get("/login", function(req, res) {
  res.send("hay");
});

app.get("/questions", function(req, res) {
  res.render("feed.hjs", {
    title: "idk"
  });
});

app.get("/idk", function(req, res) {
  res.render("index.hjs", {
    title: "idk",
    this: "<p>idk</p>",
    hidden: "ff"
  });
});

//404 page
//keep at bottom
app.use(function (req, res, next) {
  res.status(404).send("<b>404</b> Sorry can't find that!");
  next();
});

module.exports = app;
