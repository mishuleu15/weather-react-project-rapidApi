import React from 'react';

const CardLink = () => {
  return (
    <div>
      <div className='card link' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Severe Weather Alert</h5>

          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='/#' className='card-link'>
            More information
          </a>
          {/* <a href='/#' className='card-link'>
            Another link
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CardLink;
