import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <h3
        className={`text-xl font-semibold mb-2 ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.title}
      </h3>
      <p
        className={`text-gray-600 mb-4 ${todo.completed ? "line-through" : ""}`}
      >
        {todo.description}
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => onToggle(todo._id)} // Changed to todo._id
          className={`px-4 py-2 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
            todo.completed
              ? "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500"
              : "bg-green-500 hover:bg-green-600 focus:ring-green-500"
          }`}
        >
          {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        <button
          onClick={() => onDelete(todo._id)} // Changed to todo._id
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
