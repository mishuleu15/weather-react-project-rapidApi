import React from 'react';

import millify from 'millify';

import { useSelector } from 'react-redux';

import { useGetCurrentWeatherLocationQuery } from '../redux/services/weatherData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faDroplet,
  faTemperatureHigh,
  faWind,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

library.add(faDroplet, faTemperatureHigh, faWind, faCloud);

const Card = () => {
  const coords = useSelector((state) => state.setCoords);

  const { lat, lng } = coords;

  const { data: weatherData } = useGetCurrentWeatherLocationQuery({ lng, lat });

  if (!weatherData) {
    return;
  } else {
    return (
      <div className='card  mb-3' style={{ maxWidth: '540px' }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={
                weatherData.data[0]?.precip === 0
                  ? require('../img/sunny.png')
                  : require('../img/logo.png')
              }
              className='img-fluid rounded-start'
              alt='...'
            />
            <h4>
              <span className='air-quality'>Air Quality</span>{' '}
              <div
                className={
                  weatherData.data[0]?.aqi <= 50 ? 'active' : 'inactive'
                }
              >
                {weatherData.data[0]?.aqi <= 50 ? 'Excellent' : 'Moderate'}
              </div>
            </h4>
          </div>

          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                <FontAwesomeIcon
                  icon='fa-solid fa-temperature-high'
                  size='2x'
                />{' '}
                Temp{' '}
                <span className='card-value-temp'>
                  {weatherData.data[0]?.temp}
                </span>
                <img
                  className='celsius'
                  src={require('../img/degrees.png')}
                  alt='degrees'
                />
              </h5>

              <hr />
              <div className='card-subsection'>
                {' '}
                <p className='card-text'>
                  Precip{' '}
                  <FontAwesomeIcon icon='fa-xs fa-solid fa-droplet' size='lg' />{' '}
                  <span className='card-value'>
                    {weatherData.data[0]?.precip}
                  </span>
                </p>
                <p className='card-text'>
                  Wind{' '}
                  <FontAwesomeIcon icon='fa-xs fa-solid fa-wind' size='lg' />{' '}
                  <span className='card-value'>
                    {weatherData.data[0]?.wind_cdir}{' '}
                    {millify(weatherData.data[0]?.wind_spd)}
                  </span>{' '}
                  km/h
                </p>
              </div>

              <hr />
              <p className='card-text'>
                Pressure{' '}
                <img
                  className='air-pressure-image'
                  src={require('../img/atmospheric-pressure.png')}
                  alt='...'
                />{' '}
                <span className='card-value'>
                  {millify(weatherData.data[0]?.pres)}
                </span>{' '}
                mb
              </p>
              <hr />
              <p className='card-text'>
                <FontAwesomeIcon icon='fa-xs fa-solid fa-cloud' size='lg' />{' '}
                Weather condition{' '}
                <span>{weatherData.data[0]?.weather.description}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
