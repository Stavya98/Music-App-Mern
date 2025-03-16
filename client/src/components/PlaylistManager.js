import { useState, useEffect } from 'react';
import axios from 'axios';

const PlaylistManager = ({ userId, songs }) => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    const res = await axios.get(`http://localhost:5000/api/playlists/${userId}`);
    setPlaylists(res.data);
  };

  const createPlaylist = async () => {
    if (!playlistName) return;
    await axios.post('http://localhost:5000/api/playlists', { name: playlistName, userId });
    setPlaylistName('');
    fetchPlaylists();
  };

  return (
    <div className="p-4 bg-gray-800 rounded-md">
      <h2 className="text-lg font-bold mb-2">Your Playlists</h2>
      <div className="flex">
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="text-black p-2 rounded-l-md"
          placeholder="New Playlist Name"
        />
        <button
          onClick={createPlaylist}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md"
        >
          Create
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {playlists.map((pl) => (
          <li key={pl._id} className="flex justify-between bg-gray-700 p-2 rounded-md">
            {pl.name}
            <span>{pl.songs.length} songs</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistManager;
