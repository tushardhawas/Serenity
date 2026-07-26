import React, { useState, useRef } from 'react';
import './Card.css';

const Card = ({ imageSrc, audioSrc, hint }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setShowVolumeControl(false);
    } else {
      try {
        await audio.play();
        setShowVolumeControl(true);
      } catch (error) {
        console.error('Audio play failed', error);
      }
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const nextVolume = parseFloat(e.target.value);
    const audio = audioRef.current;
    setVolume(nextVolume);
    if (audio) {
      audio.volume = nextVolume;
    }
  };

  const handleEnded = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      togglePlay();
    }
  };

  return (
    <div className={`card-container ${isPlaying ? 'is-playing' : ''}`}>
      <div
        className="card"
        onClick={togglePlay}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <img src={imageSrc} alt={hint} />
        {hint && (
          <div className="card-meta">
            <p className="card-hint">{hint}</p>
          </div>
        )}
        {showVolumeControl && (
          <div className="volume-wrap">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        )}
        <audio ref={audioRef} src={audioSrc} onEnded={handleEnded}></audio>
      </div>
    </div>
  );
};

export default Card;
