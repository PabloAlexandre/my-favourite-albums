import React from 'react';

const r = require.context('./assets', false, /\.(png|jpe?g|svg)$/);
const Images = r
    .keys()
    .reduce((acc, it) => ({
      ...acc,
      [it.match(/([^/]+)(?=\.\w+$)/)[0]]: r(it),
    }), {})

const Imagery = (props) => (
  <img src={Images[props.name]} alt={props.alt} {...props} />
)

export default Imagery;