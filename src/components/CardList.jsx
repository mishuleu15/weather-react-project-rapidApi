import React from 'react';

const CardList = ({ data }) => {
  const { data: weatherData } = data;
  return (
    <div className='card list' style={{ width: '18rem' }}>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <span className='card-list-header'>Sunrise</span>{' '}
          {/* <span className='card-list-value'>{weatherData[0]?.sunrise}</span> */}
        </li>
        <li className='list-group-item'>
          <span className='card-list-header'>Sunset</span>{' '}
          {/* <span className='card-list-value'>{weatherData[0]?.sunset}</span> */}
        </li>
        <li className='list-group-item'>
          <span className='card-list-header'>Sea level pressure</span>{' '}
          {/* <span className='card-list-value'>{weatherData[0]?.slp} mb</span> */}
        </li>
      </ul>
    </div>
  );
};

export default CardList;
