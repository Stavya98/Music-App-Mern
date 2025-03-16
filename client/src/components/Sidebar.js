import { FaHome, FaMusic, FaHeart } from "react-icons/fa"
import React from "react";

const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-800 p-4 flex flex-col">
        <h2 className="text-2xl font-semibold mb-6">Music App</h2>
        <nav className="flex flex-col space-y-4">
          <button className="text-left hover:text-green-400"><FaHome />Home</button>
          <button className="text-left hover:text-green-400"><FaMusic />Playlists</button>
          <button className="text-left hover:text-green-400"><FaHeart />Favorites</button>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  