import React from "react";
import Navbar from "./components/Navbar";
import NameGenerator from "./components/NameGenerator";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 to-purple-600">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <NameGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
