import { useRef, useState } from 'react';

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <h3 className="text-xl mb-2">{currentSong?.title || 'No Song Selected'}</h3>
      <audio ref={audioRef} src={currentSong?.audioUrl} />
      <button
        onClick={togglePlay}
        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;
