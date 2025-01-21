import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaRedo,
} from "react-icons/fa";

const VideoPlayer = ({ videoUrl, coverImage, isHorizontal }) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [reload, setReload] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => {
    if (reload) {
      playerRef.current.seekTo(0);
      setPlayed(0);
      setReload(false);
    }
    setPlaying((prevPlaying) => {
      const newPlaying = !prevPlaying;
      if (newPlaying) setShowControls(true);
      return newPlaying;
    });
  };

  const toggleMute = () => setMuted(!muted);

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleEnded = () => {
    setPlaying(false);
    setReload(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSeekStart = () => {
    setSeeking(true);
  };

  const handleSeekChange = (event) => {
    const newPlayed = parseFloat(event.target.value);
    setPlayed(newPlayed);
    playerRef.current.seekTo(newPlayed, "fraction");
  };

  const handleSeekEnd = (event) => {
    const newPlayed = parseFloat(event.target.value);
    playerRef.current.seekTo(newPlayed);
    setSeeking(false);
  };

  const paddingTopValue = isHorizontal ? "56.25%" : "177.78%";

  return (
    <div
      className="video-player-container relative w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg"
      style={{ maxWidth: isHorizontal ? "500px" : "300px" }}
    >
      {" "}
      <div className="relative" style={{ paddingTop: paddingTopValue }}>
        <ReactPlayer
          ref={playerRef}
          url={videoUrl}
          playing={playing}
          controls={false}
          light={coverImage}
          className="absolute top-0 left-0 w-full h-full"
          muted={muted}
          onProgress={handleProgress}
          onDuration={handleDuration}
          onEnded={handleEnded}
          onClickPreview={togglePlay}
          width="100%"
          height="100%"
        />
      </div>
      {showControls && (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-grow flex items-center space-x-2">
            <span className="text-sm">{formatTime(played * duration)}</span>
            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-200"
                style={{ width: `${played * 100}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={played}
                onMouseDown={handleSeekStart}
                onChange={handleSeekChange}
                onMouseUp={handleSeekEnd}
                className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                style={{ direction: "ltr" }}
              />
            </div>
            <span className="text-sm">{formatTime(duration)}</span>
          </div>

          <button onClick={toggleMute} className="text-white text-2xl">
            {muted ? (
              <FaVolumeMute className="text-base" />
            ) : (
              <FaVolumeUp className="text-base" />
            )}
          </button>

          <button onClick={togglePlay} className="text-white text-2xl">
            {reload ? (
              <FaRedo className="text-base" />
            ) : playing ? (
              <FaPause className="text-base" />
            ) : (
              <FaPlay className="text-base" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
