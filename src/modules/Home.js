import React, { useState } from 'react';

import Imagery from '../imagery';

import data from '../data';


/*const Search = ({ onChange, value }) => (
  <div className="search">
    <input className="search__input" value={value} onChange={onChange} type="text" placeholder="Search from album" />
  </div>
)*/

const Card = ({ preview, name, id, slug, tracks }) => (
  <div onClick={() => preview(slug)} className="home__album">
    <Imagery name={slug} />
    <div className="home__album__info">
      <p className="home__album__info__name">{name}</p>
    </div>
  </div>
);

const Home = (props) => {

  const [searchField, setSearchField] = useState('');
  // const onChange = (e) => setSearchField(e.target.value);
  return (
      <div className="home">
        <h1 className="home__title">My Music <span>by Piripak.cc</span></h1>
        { /* <Search onChange={onChange} value={searchField}/> */ }
        <div className="home__albums">
          { 
            data
            .filter(it => !searchField || it.name.toLowerCase().includes(searchField.toLowerCase()))
            .map(it => 
              <Card key={it.id} preview={props.history.push} {...it} />
            )
          }
        </div>
      </div>
  );
}

export default Home;
