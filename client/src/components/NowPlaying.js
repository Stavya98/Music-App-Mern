import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const NowPlaying = ({ currentSong, songs = [], onSelectSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentIndex = Array.isArray(songs)
    ? songs.findIndex((song) => song._id === currentSong?._id)
    : -1;

  // Helper function to get full URL
  const getSongUrl = (song) => {
    if (!song) return "";
    return `http://localhost:5000/${song.filePath.replace(/\\/g, "/")}`;
  };

  // ✅ This runs every time you select a new song
  useEffect(() => {
    if (!currentSong || !audioRef.current) return;

    const url = getSongUrl(currentSong);
    console.log("▶️ Switching to:", url);

    const audio = audioRef.current;

    audio.src = url;
    audio.load();

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        console.log("🎵 Playing:", currentSong.title);
      } catch (error) {
        console.error("Playback error:", error);
        setIsPlaying(false);
      }
    };

    // Reset progress + play the new song
    setProgress(0);
    playAudio();
  }, [currentSong]);

  // Toggle play/pause manually
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Playback error:", error));
    }
  };

  // Update progress bar as song plays
  const handleProgress = () => {
    if (!audioRef.current) return;

    const percent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;

    setProgress(isNaN(percent) ? 0 : percent);
  };

  // Next song handler
  const playNext = () => {
    if (currentIndex < songs.length - 1) {
      const nextSong = songs[currentIndex + 1];
      onSelectSong(nextSong);
    }
  };

  // Previous song handler
  const playPrevious = () => {
    if (currentIndex > 0) {
      const prevSong = songs[currentIndex - 1];
      onSelectSong(prevSong);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
      {/* Song Info */}
      <div className="flex items-center">
        <img
          src={
            currentSong?.imageUrl ||
            "https://img.icons8.com/?size=100&id=CWZOl3WNER6r&format=png&color=000000"
          }
          alt={currentSong?.title || "No Song Selected"}
          className="w-12 h-12 rounded-md object-cover mr-4"
        />
        <h3 className="text-lg font-medium">
          {currentSong?.title || "No Song Selected"}
        </h3>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4 ml-4">
        <button
          onClick={playPrevious}
          disabled={currentIndex <= 0}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          <FaStepBackward size={20} />
        </button>

        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-green-500 hover:bg-green-600"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>

        <button
          onClick={playNext}
          disabled={currentIndex === -1 || currentIndex >= songs.length - 1}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          <FaStepForward size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 mx-4">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => {
            if (!audioRef.current) return;

            const newTime =
              (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = isNaN(newTime) ? 0 : newTime;

            setProgress(e.target.value);
          }}
          className="w-full"
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} onTimeUpdate={handleProgress} />
    </div>
  );
};

export default NowPlaying;
