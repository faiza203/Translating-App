const path = require("path");
const i18n = require("i18n");
const express = require("express");

const app = express();

const port = 4000;

i18n.configure({
  locales: ["en", "ja", "ko"],
  directory: path.join(__dirname, "/locales"),
});

app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/en", function (req, res) {
  i18n.setLocale("en");
  res.send(i18n.__("Hello") + ` : EN`);
});

app.post("/ja", function (req, res) {
  i18n.setLocale("en");
  res.send(i18n.__("Hello") + " : Ja");
});
app.post("/ko", function (req, res) {
  i18n.setLocale("en");
  res.send(i18n.__("Hello") + " : Ko");
});

app.listen(port, function () {
  console.log(`App is listen on ${port}`);
});
