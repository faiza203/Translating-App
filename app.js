const http = require("http");
const path = require("path");
const { I18n } = require("i18n");
const express = require("express");
const app = express();

const port = 4000;

var hbs = require("hbs");
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, function () {
  console.log(`App is listen on ${port}`);
});
