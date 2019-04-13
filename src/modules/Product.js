import React, { useState } from 'react';

import { msFormat } from '../util';
import Imagery from '../imagery';
import mockData from '../data';
import ScrollTop from '../ScrollTop';

import './style.scss';

const formatTrackName = name =>
  name.length > 30 ? `${name.substring(0, 30)}...` : name;
  
const Track = (props, index) => (
  <h3 onClick={() => props.play(index + 1)} className={`product__track${props.preview ? '' : ' -disabled'}`} key={index}>
    {index+1}- {formatTrackName(props.name)} ({msFormat(props.duration)})
  </h3>
);

const Product = ({ history, match: { params: { slug } } }) => {
  const [track, setTrack] = useState();
  const [isPlaying, setIsPlaying] = useState();

  const play = trackIndex => {
    setTrack(trackIndex);

    if(isPlaying) clearTimeout(isPlaying);

    setIsPlaying(setTimeout(() => {
      setIsPlaying(null);
    }, 30000));
  }

  const productId = slug;
  const product = mockData.find(it => it.slug === slug);

  const currentTrack = track && product.tracks[track -1];

  return !product ? "" : (
    <ScrollTop>
      <div className="App">
        {currentTrack && isPlaying && 
        <div className="player">
          <div className="player__bar" key={currentTrack.name}></div>
        </div>
        }

        <Imagery name='Chevron' className="back" onClick={history.goBack} />
        <div className="product">
          <h1 className="product__title">{ product.name }</h1>
          <h2 className="product__artist">- { product.artist } -</h2>
          <div className="product__details">
              <div className={`product__image${isPlaying ? '--playing' : ''}`}>
              <Imagery name={productId} className="disc"/>
              { 
                currentTrack && isPlaying && 
                <p title={currentTrack.name} className="product__music">{currentTrack.name}</p>
              }
            </div>
            <div className="product__info">
              { product.tracks.map((it, i) => Track({...it, play }, i)) }
            </div>
            { currentTrack && isPlaying && 
              <audio key={currentTrack.name} autoPlay>
                <source src={currentTrack.preview} type="audio/mp3" />
              </audio>
            }
          </div>
        </div>
      </div>
    </ScrollTop>
  );
}

export default Product;