import React from 'react';

import Imagery from '../imagery';

import data from '../data';

const Card = ({ preview, name, id, slug, tracks }) => (
  <div onClick={() => preview(slug)} className="home__album">
    <Imagery name={slug} />
    <div className="home__album__info">
      <p className="home__album__info__name">{name}</p>
    </div>
  </div>
);

const Home = (props) => {
  return (
      <div className="home">
        <h1 className="home__title">My Music <span>by Piripak.cc</span></h1>
        <div className="home__albums">
          { 
            data.map(it => 
              <Card key={it.id} preview={props.history.push} {...it} />
            )
          }
        </div>
      </div>
  );
}

export default Home;