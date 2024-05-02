import React, { useState, useRef } from 'react';
import './Card.css'; 

const Card = ({ imageSrc, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolumeControl, setShowVolumeControl] = useState(false); 
  const audioRef = useRef();

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setShowVolumeControl(false);
    } else {
      audio.play();
      setShowVolumeControl(true);
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    audio.volume = e.target.value;
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={imageSrc} alt="Image" onClick={togglePlay} />
        {showVolumeControl && ( 
          <div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              defaultValue={audioRef.current?.volume || 1}
              onChange={handleVolumeChange}
            />
          </div>
        )}
        <audio ref={audioRef} src={audioSrc}></audio>
      </div>
    </div>
  );
};

export default Card;
