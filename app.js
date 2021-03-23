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

app.post("/goBack", function (req, res) {
  res.redirect("/");
});

app.post("/en", function (req, res) {
  i18n.setLocale("en");
  res.render("result", {
    text: i18n.__("Hello"),
    lang: "EN",
  });
});

app.post("/ja", function (req, res) {
  i18n.setLocale("ja");
  res.render("result", {
    text: i18n.__("Hello"),
    lang: "JA",
  });
});

app.post("/ko", function (req, res) {
  i18n.setLocale("ko");
  res.render("result", {
    text: i18n.__("Hello"),
    lang: "Ko",
  });
});

app.listen(port, function () {
  console.log(`App is listen on ${port}`);
});
