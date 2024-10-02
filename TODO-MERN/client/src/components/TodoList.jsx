import React from "react";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <li
          key={todo._id} // Ensure unique key is used for list items
          className={`p-4 mb-2 rounded-lg shadow-md transition duration-300 ${
            todo.status === "completed" // Check the status instead of completed
              ? "line-through text-gray-500 bg-gray-200"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <h3 className="text-lg font-semibold">{todo.title}</h3>
          <p className="text-sm text-gray-600">{todo.description}</p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => onToggle(todo._id)} // Call the toggle function
              className="px-3 py-1 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-300"
            >
              {todo.status === "completed"
                ? "Mark as Incomplete"
                : "Mark as Complete"}
            </button>
            <button
              onClick={() => onDelete(todo._id)} // Call the delete function
              className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
            >
              Delete
            </button>
            <button
              onClick={() => onEdit(todo._id, todo.title, todo.description)} // Call the edit function
              className="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
