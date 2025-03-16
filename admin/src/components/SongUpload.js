import React, { useState } from 'react';
import axios from '../axios';

const SongUpload = ({ token }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title || !artist || !file) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('song', file);

    try {
      const res = await axios.post('/songs/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Song uploaded successfully!');
      console.log(res.data);
      setTitle('');
      setArtist('');
      setFile(null);
    } catch (error) {
      console.error(error);
      alert('Failed to upload song');
    }
  };

  return (
    <form onSubmit={handleUpload} style={{ marginBottom: '20px' }}>
      <h2>Upload New Song</h2>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br /><br />

      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      /><br /><br />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      /><br /><br />

      <button type="submit">Upload Song</button>
    </form>
  );
};

export default SongUpload;
