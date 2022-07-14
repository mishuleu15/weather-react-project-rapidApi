import React from 'react';

import Card from './Card';
import CardList from './CardList';
import CardLink from './CardLink';
import Map from './Map';

import { useGetCurrentWeatherLocationQuery } from '../redux/services/weatherData';

const Main = () => {
  const lon = 38.5;
  const lat = -78.5;
  const { data } = useGetCurrentWeatherLocationQuery({ lon, lat });

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className='main-container'>
        <Card data={data} />
        <CardList />
        <CardLink />
        <CardLink />
        <Map />
      </div>
    );
  }
};

export default Main;
