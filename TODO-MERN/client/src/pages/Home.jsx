import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-down">
          Welcome to the To-Do Application
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
          Please log in or sign up from the Navbar to manage your tasks.
        </p>
        <div className="space-x-4">
          <Link
            to="/todos"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-pulse"
          >
            Todos List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
