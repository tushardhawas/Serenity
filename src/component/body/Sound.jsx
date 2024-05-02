import React, { useState, useRef } from 'react';
import './Card.css'; 

const Card = ({ imageSrc, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showRange, setShowRange] = useState(false); 
  const [currentTime, setCurrentTime] = useState(0); 
  const audioRef = useRef();

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setShowRange(false);

    } else {
      audio.play();
      setShowRange(true);
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  const handleSliderChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(audio.currentTime);
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={imageSrc} alt="Image" onClick={togglePlay} />
        {showRange && ( 
          <div>
            <input
              type="range"
              min={0}
              max={audioRef.current?.duration || 0}
              value={currentTime}
              onChange={handleSliderChange}
            />
          </div>
        )}
        <audio ref={audioRef} src={audioSrc} onTimeUpdate={handleTimeUpdate}></audio>
      </div>
    </div>
  );
};

export default Card;
