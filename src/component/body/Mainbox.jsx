import React from 'react';
import Card from './Sound';
import './Card.css';
import audio1 from '../../assets/wind.mp3';
import image1 from '../../assets/wind-svgrepo-com.svg';

import audio2 from '../../assets/mountain_stream.mp3';
import image2 from '../../assets/water.svg';

import audio3 from '../../assets/Highway.mp3';
import image3 from '../../assets/Highway.svg';

import audio4 from '../../assets/bird.mp3';
import image4 from '../../assets/bird.svg';

import audio5 from '../../assets/campfire.mp3';
import image5 from '../../assets/campfire.svg';

import audio6 from '../../assets/city.mp3';
import image6 from '../../assets/city.svg';

import audio7 from '../../assets/hollow.mp3';
import image7 from '../../assets/space.svg';

import audio8 from '../../assets/rain.mp3';
import image8 from '../../assets/rain.svg';

import audio9 from '../../assets/shinchan.mp3';
import image9 from '../../assets/love1.svg';

import audio10 from '../../assets/pisuke.mp3';
import image10 from '../../assets/love2.svg';

import audio11 from '../../assets/summernight.mp3';
import image11 from '../../assets/summernight.svg';

import audio12 from '../../assets/thunder.mp3';
import image12 from '../../assets/thunder.svg';

import audio13 from '../../assets/Underwater.mp3';
import image13 from '../../assets/underwater.svg';

import audio14 from '../../assets/DoraemonMagicalSwordsmen.mp3';
import image14 from '../../assets/love1.svg';

import audio15 from '../../assets/doremon3.mp3';
import image15 from '../../assets/love2.svg';

import audio16 from '../../assets/kiteretsu1.mp3';
import image16 from '../../assets/space.svg';

import audio17 from '../../assets/kochikame.mp3';
import image17 from '../../assets/city.svg';

import audio18 from '../../assets/shinchansportdance.mp3';
import image18 from '../../assets/love2.svg';

import audio19 from '../../assets/Krishna.mp3';
import image19 from '../../assets/love1.svg';

const soundGroups = [
  {
    id: 'nature-city',
    title: 'Nature & city',
    items: [
      { id: 1, hint: '', audioSrc: audio1, imageSrc: image1 },
      { id: 2, hint: '', audioSrc: audio2, imageSrc: image2 },
      { id: 4, hint: '', audioSrc: audio4, imageSrc: image4 },
      { id: 5, hint: '', audioSrc: audio5, imageSrc: image5 },
      { id: 8, hint: '', audioSrc: audio8, imageSrc: image8 },
      { id: 13, hint: '', audioSrc: audio13, imageSrc: image13 },
      { id: 3, hint: '', audioSrc: audio3, imageSrc: image3 },
      { id: 6, hint: '', audioSrc: audio6, imageSrc: image6 },
      { id: 7, hint: '', audioSrc: audio7, imageSrc: image7 },
      { id: 11, hint: '', audioSrc: audio11, imageSrc: image11 },
      { id: 12, hint: '', audioSrc: audio12, imageSrc: image12 },
    ],
  },
  {
    id: 'nostalgia',
    title: 'Old-show memories',
    items: [
      { id: 9, hint: '', audioSrc: audio9, imageSrc: image9 },
      { id: 10, hint: '', audioSrc: audio10, imageSrc: image10 },
      { id: 14, hint: '', audioSrc: audio14, imageSrc: image14 },
      { id: 15, hint: '', audioSrc: audio15, imageSrc: image15 },
      { id: 16, hint: '', audioSrc: audio16, imageSrc: image19  },
      { id: 17, hint: '', audioSrc: audio17, imageSrc: image15  },
      { id: 18, hint: '', audioSrc: audio18, imageSrc: image19 },
      { id: 19, hint: '', audioSrc: audio19, imageSrc: image15 },
    ],
  },
];

const MainBox = () => {
  return (
    <div className="app-shell">
      <div className="group-list">
        {soundGroups.map((group) => (
          <section key={group.id} id={group.id} className="group-row">
            <div className="group-title">
              <h3>{group.title}</h3>
              <span>{group.items.length} vibes</span>
            </div>
            <div className="card-row">
              {group.items.map((data) => (
                <Card key={data.id} hint={data.hint} audioSrc={data.audioSrc} imageSrc={data.imageSrc} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MainBox;
