import React from 'react';

import NewsCard from '../components/NewsCard';

import { Link } from 'react-router-dom';

const Weather14Days = ({ weather14Days }) => {
  const dateToDayName = (date) => {
    let dateTransform = date.replace(/\W/g, '/');
    let newDate = new Date(dateTransform);
    let weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      newDate
    );

    return weekDay.slice(0, 1);
  };

  if (!weather14Days) {
    return;
  } else {
    return (
      <div className='weather14days-section'>
        <div className='weather14days-container'>
          <div className='weather14days-card'>
            <span className='weather14days-title title'>Weather 14 Days</span>{' '}
            <div>
              <hr className='weather14days-line' />
              <ul className='weather14days-list'>
                {weather14Days?.data?.slice(0, 7).map((data, index) => {
                  return (
                    <Link className='nav-link' to={`/weather/${index}`}>
                      <div className='weather14days-date'>
                        <li>{dateToDayName(data.datetime)}</li>
                        <li>
                          {data.datetime.substring(8).startsWith('0')
                            ? data.datetime.substring(9)
                            : data.datetime.substring(8)}
                        </li>
                        <li>
                          <img
                            className='weather14days-img'
                            src={`https://www.weatherbit.io/static/img/icons/${data?.weather?.icon}.png`}
                            alt=''
                            srcset=''
                          />
                        </li>
                        <li>{data.app_max_temp.toFixed(0)}&#176;</li>
                        <li>{data.app_min_temp.toFixed(0)}&#176;</li>
                      </div>
                    </Link>
                  );
                })}
              </ul>
              <hr className='weather14days-line' />
              <ul className='weather14days-list'>
                {weather14Days.data.slice(7, 14).map((data) => {
                  return (
                    <div className='weather14days-date'>
                      <li>{dateToDayName(data.datetime)}</li>
                      <li>
                        {data.datetime.substring(8).startsWith('0')
                          ? data.datetime.substring(9)
                          : data.datetime.substring(8)}
                      </li>
                      <li>
                        <img
                          className='weather14days-img'
                          src={`https://www.weatherbit.io/static/img/icons/${data?.weather?.icon}.png`}
                          alt=''
                          srcset=''
                        />
                      </li>
                      <li>{data.app_max_temp.toFixed(0)}&#176;</li>
                      <li>{data.app_min_temp.toFixed(0)}&#176;</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <NewsCard simplified />
        </div>
      </div>
    );
  }
};

export default Weather14Days;
