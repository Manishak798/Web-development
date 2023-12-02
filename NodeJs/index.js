import express from "express";
const app = express();
const port = 8080;
app.get("/", (req, res) => {
    var name = "mani";
    res.send(`Hello ${name}`);
})
app.get("/about", (req, res) => {

    res.send("<h1>About me</h1><p>My name is Manisha Kundnani.</p>");
})
app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>Contact : +9112334455</p>");
})
app.listen(port, () => {
    console.log("server is running");
})