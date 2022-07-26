import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCloudBolt, faTornado } from '@fortawesome/free-solid-svg-icons';

library.add(faCloudBolt, faTornado);

const CardLink = () => {
  return (
    <div>
      <div className='card link' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Severe Weather Alert</h5>
          <hr />
          <FontAwesomeIcon icon='fa-solid fa-cloud-bolt' size='2x' />{' '}
          <FontAwesomeIcon icon='fa-solid fa-tornado' size='2x' />
          <p className='card-text card-link'>
            Check if they are severe weather alerts in your area.
          </p>
          <Link to='/alert' className='card-link'>
            <p className='card-link text'>
              More information <span className='severe-weather'>&rarr;</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardLink;
