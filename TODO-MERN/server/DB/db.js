const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(connectionString);
    console.log("DB connected successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = connectDB;
