const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const gptRoutes = require("./routes/gpt.routes");

dotenv.config();

const app = express();

// app.use(cors());

// CORS options
var corsOptions = {
  origin: "https://names-generator-ai.vercel.app",
  optionsSuccessStatus: 200,
};

// Apply CORS middleware with options
app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use("/api", gptRoutes);

app.use("/", (req, res) => {
  res.send("Hello World");
});

// Port configuration
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is listening at PORT - http://localhost:${PORT}`);
});
