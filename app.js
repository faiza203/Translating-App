const http = require("http");
const path = require("path");
const i18n = require("i18n");
const express = require("express");
const app = express();

const port = 4000;

i18n.configure({
  locales: ["en", "ja", "ko"],
  directory: path.join(__dirname, "/locales"),
});

var hbs = require("hbs");
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  i18n.setLocale("ja");
  console.log(i18n.__("Hello"));
  i18n.setLocale("ko");
  console.log(i18n.__("Hello"));
  res.render("index");
});

app.get("/en", function (req, res) {
  i18n.setLocale("ja");
  console.log(i18n.__("Hello"));
  i18n.setLocale("ko");
  console.log(i18n.__("Hello"));
  res.render("index");
});

app.get("/ja", function (req, res) {
  i18n.setLocale("ja");
  console.log(i18n.__("Hello"));
  i18n.setLocale("ko");
  console.log(i18n.__("Hello"));
  res.render("index");
});
app.get("/ko", function (req, res) {
  i18n.setLocale("ja");
  console.log(i18n.__("Hello"));
  i18n.setLocale("ko");
  console.log(i18n.__("Hello"));
  res.render("index");
});

app.listen(port, function () {
  console.log(`App is listen on ${port}`);
});
