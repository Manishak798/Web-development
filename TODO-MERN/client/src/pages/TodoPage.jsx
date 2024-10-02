import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");
  const [editDescriptionText, setEditDescriptionText] = useState("");

  const fetchTodos = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://todo-mern-hyif.onrender.com/api", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleToggle = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    try {
      const todoToToggle = todos.find((todo) => todo._id === id);
      if (!todoToToggle) {
        console.error("Todo not found");
        return;
      }

      const updatedStatus =
        todoToToggle.status === "completed" ? "incomplete" : "completed";

      const response = await fetch(
        `https://todo-mern-hyif.onrender.com/api/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: updatedStatus }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error:", errorText);
        return;
      }

      const updatedTodo = await response.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, status: updatedTodo.status } : todo
        )
      );
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const handleDelete = async (todoId) => {
    const token = localStorage.getItem("token");
    try {
      await fetch(`https://todo-mern-hyif.onrender.com/api/${todoId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(todos.filter((todo) => todo._id !== todoId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim() || !newDescription.trim()) return;

    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://todo-mern-hyif.onrender.com/api", {
        // Changed to deployed URL
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo,
          description: newDescription,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error adding todo:", errorText);
        return;
      }

      const newTodoData = await response.json();
      setTodos((prevTodos) => [...prevTodos, newTodoData]); // Update state with the new todo
      setNewTodo("");
      setNewDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleEditTodo = async (e) => {
    e.preventDefault();
    if (!editTodoText.trim() || !editDescriptionText.trim()) return;

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `https://todo-mern-hyif.onrender.com/api/${editTodoId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: editTodoText,
            description: editDescriptionText,
          }),
        }
      );
      const updatedTodo = await response.json();
      setTodos(
        todos.map((todo) => (todo._id === editTodoId ? updatedTodo : todo))
      );
      setEditTodoId(null);
      setEditTodoText("");
      setEditDescriptionText("");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Todo List
        </h1>
        <form
          onSubmit={editTodoId ? handleEditTodo : handleAddTodo}
          className="flex flex-col mb-4"
        >
          <input
            type="text"
            value={editTodoId ? editTodoText : newTodo}
            onChange={(e) =>
              editTodoId
                ? setEditTodoText(e.target.value)
                : setNewTodo(e.target.value)
            }
            placeholder={editTodoId ? "Edit todo" : "Add a new todo"}
            className="mb-2 flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          />
          <input
            type="text"
            value={editTodoId ? editDescriptionText : newDescription}
            onChange={(e) =>
              editTodoId
                ? setEditDescriptionText(e.target.value)
                : setNewDescription(e.target.value)
            }
            placeholder={editTodoId ? "Edit description" : "Add a description"}
            className="mb-2 flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          >
            {editTodoId ? "Update" : "Add"}
          </button>
        </form>
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={(id, title, description) => {
            setEditTodoId(id);
            setEditTodoText(title);
            setEditDescriptionText(description);
          }}
        />
      </div>
    </div>
  );
};

export default TodoPage;
