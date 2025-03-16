import React from 'react';
import SongUpload from './components/SongUpload';
import SongList from './components/SongList';

function App() {
  // Hardcode the admin JWT for now
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDIwNTc2MzUsImV4cCI6MTc0MjA2MTIzNX0.QRdbinmAmCqyHgJREVjNgalEqO4hhQv64GRBwQ7Nbcc';

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Panel - Manage Songs</h1>
      <SongUpload token={token} />
      <SongList token={token} />
    </div>
  );
}

export default App;

//demo comment