import React from 'react';

import Category from '../Category';

import './Directory.scss';

function Directory({ categories }) {
  return (
    <div className='directory-container'>
      {categories.map(({ id, title, imageUrl }) => (
        <Category key={id} id={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
}

export default Directory;
