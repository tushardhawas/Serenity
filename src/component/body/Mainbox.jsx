import React from 'react';
import Card from './Sound';
import './Card.css'; 
import audio1 from '../../assets/wind.mp3'
import image1 from '../../assets/wind-svgrepo-com.svg'
import audio2 from '../../assets/mountain_stream.mp3'
import image2 from '../../assets/water.svg'
import audio3 from '../../assets/pisuke.mp3'
import image3 from '../../assets/shinchan.svg'



const audioData = [
  { id: 1, audioSrc: audio1, imageSrc: image1 },
  { id: 2, audioSrc: audio2, imageSrc: image2 },
  { id: 3, audioSrc: audio3, imageSrc: image3 },
  { id: 4, audioSrc: audio1, imageSrc: image1 },
  { id: 5, audioSrc: audio2, imageSrc: image2 },
  { id: 6, audioSrc: audio3, imageSrc: image3 },
 
  
];

const MainBox = () => {
  return (

    <div className='box'>
      {audioData.map((data) => (
        <Card key={data.id} audioSrc={data.audioSrc} imageSrc={data.imageSrc} />
      ))}
    </div>
  );
};

export default MainBox;
