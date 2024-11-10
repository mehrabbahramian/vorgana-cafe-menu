const http = require("http");
const express = require("express");
const path = require('path');
const app = express();

const PORT = 5000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
{
    res.status(200).render("index", {});
});
app.get("/about", (req, res) =>
{
    res.status(200).render("about", {});
});
app.get("/menu", (req, res) =>
{
    res.status(200).render("menu", {});
});
app.get("/contact", (req, res) =>
{
    res.status(200).render("contact", {});
});
app.get("*", (req, res) =>
{
    res.status(404).send(`<h1>Error 404: Page Not Found </h1>`)
})

http.createServer(app).listen(PORT, () =>
{
    console.log(`server is running at http://localhost:${PORT}`);
})