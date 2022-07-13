import React from 'react';

import Card from './Card';
import CardList from './CardList';
import CardLink from './CardLink';
import Map from './Map';

const Main = () => {
  return (
    <div className='main-container'>
      <Card />
      <CardList />
      <CardLink />
      <CardLink />
      <Map />
    </div>
  );
};

export default Main;
