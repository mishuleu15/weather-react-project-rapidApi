import React from 'react';

import { useSelector } from 'react-redux';

import { useGetCurrentWeatherLocationQuery } from '../redux/services/weatherData';

const CardList = ({ data }) => {
  const coords = useSelector((state) => state.setCoords);

  const { lat, lng } = coords;

  const { data: weatherData } = useGetCurrentWeatherLocationQuery({ lng, lat });
  if (!weatherData) {
    return;
  } else {
    return (
      <div className='card list'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='card-list-header'>Sunrise</span>{' '}
            <span className='card-list-value'>
              {weatherData.data[0]?.sunrise}
            </span>
          </li>
          <li className='list-group-item'>
            <span className='card-list-header'>Sunset</span>{' '}
            <span className='card-list-value'>
              {weatherData.data[0]?.sunset}
            </span>
          </li>
          <li className='list-group-item'>
            <span className='card-list-header'>Sea level pressure</span>{' '}
            <span className='card-list-value'>
              {weatherData.data[0]?.slp} mb
            </span>
          </li>
        </ul>
      </div>
    );
  }
};

export default CardList;
