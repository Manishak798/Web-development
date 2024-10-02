import React from "react";
import { Github } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600 cursor-pointer">
              Names Generator
            </span>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/bobbyy16/names-generator-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
