import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">My App</div>
        <div className="flex items-center">
          <button
            onClick={() => navigate("/")}
            className="text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 mr-2"
          >
            Home
          </button>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white px-4 py-2 rounded bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/signup")}
                className="text-white px-4 py-2 rounded bg-green-600 hover:bg-green-700 mr-2"
              >
                Signup
              </button>
              <button
                onClick={() => navigate("/login")}
                className="text-white px-4 py-2 rounded bg-green-600 hover:bg-green-700"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
