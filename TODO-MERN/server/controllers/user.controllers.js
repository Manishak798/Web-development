const User = require("../models/user.models.js");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = require("../types/user.type.js");

const JWT_SECRET = process.env.JWT_SECRET;

// signup

exports.signup = async (req, res) => {
  try {
    const validatedData = userSchema.parse(req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await new User(validatedData);
    await user.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: error.errors });
    }
    return res.status(500).json({ error: "Server error" });
  }
};

// login

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
