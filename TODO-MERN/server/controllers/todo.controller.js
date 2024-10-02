const Todo = require("../models/todo.models.js");

const TodoSchema = require("../types/todo.types.js");

// create new todo

exports.createTodo = async (req, res) => {
  try {
    const validatedData = TodoSchema.parse(req.body);

    const newTodo = new Todo({
      ...validatedData,
      createdBy: req.user.userId,
    });
    await newTodo.save();
    return res.status(201).json(newTodo);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: error.errors });
    }
    return res.status(500).json({ error: "Server error" });
  }
};

// Get all todos

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      createdBy: req.user.userId,
    });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// update a todo

exports.updateTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    const validatedData = TodoSchema.parse(req.body); // Validate incoming data
    const todo = await Todo.findOneAndUpdate(
      { _id: todoId, createdBy: req.user.userId }, // Ensure the user owns the todo
      validatedData,
      { new: true } // Return the updated document
    );

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    return res.status(200).json(todo);
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ error: error.errors });
    }
    console.error("Error updating todo:", error); // Log for debugging
    return res.status(500).json({ error: "Server error" });
  }
};

// Delete a todo

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  try {
    const todo = await Todo.findOneAndDelete({
      _id: todoId,
      createdBy: req.user.userId, // Ensure the user owns the todo
    });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error); // Log for debugging
    return res.status(500).json({ error: "Server error" });
  }
};
