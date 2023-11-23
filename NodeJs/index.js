import express from "express";
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    // res.send("<h1> HELLO MANISHA, FROM EXPRESS </h1>");
    // res.sendStatus(200);
    res.send("<h1> HELLO MANISHA, FROM EXPRESS </h1>").status(200);
    // Do not attempt to use 'res' outside this scope; multiple responses cannot be sent in a single handler.
});
app.post('/user', (req, res) => {
    res.sendStatus(199);
});
app.patch('/user/manisha', (req, res) => {
    res.sendStatus(300);
});
app.put('/user/register', (req, res) => {
    res.sendStatus(404);
});
app.listen(port, (req, res) => {
    // res.sendStatus(201);
    console.log("running");//yaha ope status code mnhi bhejna
});
