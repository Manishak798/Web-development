const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./DB/db.js");
const app = express();

connectDB();
app.use(express.json());
app.use(cors());
//  routes
const userRoutes = require("./routes/user.routes.js");
const todoRoutes = require("./routes/todo.routes.js");

app.use("/api", userRoutes);
app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  res.send(`
            <html>
              <head><title>Success!</title></head>
              <body>
                <h1>You did it!</h1>
                <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
              </body>
            </html>
          `);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening at port http://localhost:${PORT}`);
});
