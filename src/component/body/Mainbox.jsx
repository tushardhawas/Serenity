import React from 'react';
import Card from './Sound';
import './Card.css'; 
import audio1 from '../../assets/wind.mp3'
import image1 from '../../assets/wind-svgrepo-com.svg'

import audio2 from '../../assets/mountain_stream.mp3'
import image2 from '../../assets/water.svg'

import audio3 from '../../assets/Highway.mp3'
import image3 from '../../assets/Highway.svg'

import audio4 from '../../assets/bird.mp3'
import image4 from '../../assets/bird.svg'

import audio5 from '../../assets/campfire.mp3'
import image5 from '../../assets/campfire.svg'

import audio6 from '../../assets/city.mp3'
import image6 from '../../assets/city.svg'

import audio7 from '../../assets/hollow.mp3'
import image7 from '../../assets/space.svg'

import audio8 from '../../assets/rain.mp3'
import image8 from '../../assets/rain.svg'

import audio9 from '../../assets/shinchan.mp3'
import image9 from '../../assets/love1.svg'

import audio10 from '../../assets/pisuke.mp3'
import image10 from '../../assets/love2.svg'


const audioData = [
  { id: 1, audioSrc: audio1, imageSrc: image1 },
  { id: 2, audioSrc: audio2, imageSrc: image2 },
  { id: 3, audioSrc: audio3, imageSrc: image3 },
  { id: 4, audioSrc: audio4, imageSrc: image4 },
  { id: 5, audioSrc: audio5, imageSrc: image5 },
  { id: 6, audioSrc: audio6, imageSrc: image6 },
  { id: 7, audioSrc: audio7, imageSrc: image7 },
  { id: 8, audioSrc: audio8, imageSrc: image8 },
  { id: 9, audioSrc: audio9, imageSrc: image9 },
  { id: 10, audioSrc: audio10, imageSrc: image10 },
 
  
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
