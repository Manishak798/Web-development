import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`server initiated on ${port}`);
})//this command will run locally in our computer localhost:3000 port.
