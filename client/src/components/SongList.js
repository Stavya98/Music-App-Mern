// src/components/SongList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import Player from "./Player";

const SongList = ({ songs, onSelectSong }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter songs based on searchTerm
  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Song list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredSongs.map((song) => (
          <div
            key={song._id}
            onClick={() => onSelectSong(song)}
            className="bg-gray-800 hover:bg-gray-700 cursor-pointer p-4 rounded-lg shadow-md flex flex-col items-center transition duration-200"
          >
            <img
              src={
                "https://img.icons8.com/?size=100&id=CWZOl3WNER6r&format=png&color=000000"
              } // Placeholder for now
              alt={song.title}
              className="w-32 h-32 rounded-full object-cover mx-auto"
            />
            <h4 className="text-lg font-medium">{song.title}</h4>
            <p className="text-sm text-gray-400">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
