import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faDroplet,
  faTemperatureHigh,
} from '@fortawesome/free-solid-svg-icons';

library.add(faDroplet, faTemperatureHigh);

const Card = ({ data }) => {
  const { data: weatherData } = data;
  console.log('card', weatherData[0]);
  return (
    <div className='card mb-3' style={{ maxWidth: '540px' }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={
              weatherData[0].precip > 0
                ? require('../img/sunny.png')
                : require('../img/logo.png')
            }
            className='img-fluid rounded-start'
            alt='...'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Current Weather</h5>
            <h5 className='card-title'>
              <FontAwesomeIcon icon='fa-solid fa-temperature-high' size='2x' />{' '}
              Temp {weatherData[0].app_temp}
            </h5>
            <hr />
            <p className='card-text'>
              Precip{' '}
              <FontAwesomeIcon icon='fa-xs fa-solid fa-droplet' size='lg' />{' '}
              {weatherData[0].precip}
            </p>
            <hr />
            <p className='card-text'>
              Pressure{' '}
              <img
                className='air-pressure-image'
                src={require('../img/atmospheric-pressure.png')}
                alt='...'
              />{' '}
              {weatherData[0].pres} mb
            </p>
            <hr />
            <p className='card-text'>
              Pressure{' '}
              <FontAwesomeIcon icon='fa-xs fa-solid fa-droplet' size='lg' />{' '}
              {weatherData[0].pres}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
