import React from 'react';

import DirectoryItem from '../DirectoryItem';

import './Directory.scss';

function Directory({ categories }) {
  return (
    <div className='directory-container'>
      {categories.map((category) => {
        console.log(category)
        return <DirectoryItem key={category.id} category={category} />
      })}
    </div>
  );
}

export default Directory;
