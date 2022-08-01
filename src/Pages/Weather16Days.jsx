import React from 'react';

const Weather5Days = ({ weather16Days }) => {
  console.log('weather16dayscompo', weather16Days);
  return (
    <div className='weather16days-container'>
      <div className='weather16days-card'>
        Weather16Days{' '}
        <ul className='weather16days-list'>
          <li>S</li>

          <li>M</li>

          <li>T</li>

          <li>W</li>

          <li>T</li>

          <li>F</li>

          <li>S</li>
        </ul>
        <div>
          <hr className='weather16days-line' />
          <ul className='weather16days-list'>
            <li>31</li>

            <li>1</li>

            <li>2</li>

            <li>3</li>

            <li>4</li>

            <li>5</li>

            <li>6</li>
          </ul>

          <ul className='weather16days-list'>
            <li>
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>
          </ul>

          <ul className='weather16days-list'>
            <li>25&#176;</li>

            <li>23&#176;</li>

            <li>25&#176;</li>

            <li>27&#176;</li>

            <li>28&#176;</li>

            <li>29&#176;</li>

            <li>30&#176;</li>
          </ul>

          <ul className='weather16days-list'>
            <li>18&#176;</li>

            <li>15&#176;</li>

            <li>14&#176;</li>

            <li>14&#176;</li>

            <li>16&#176;</li>

            <li>17&#176;</li>

            <li>17&#176;</li>
          </ul>
          <hr className='weather16days-line' />
        </div>
        <div>
          {/* <hr className='weather16days-line' /> */}
          <ul className='weather16days-list'>
            <li>31</li>

            <li>1</li>

            <li>2</li>

            <li>3</li>

            <li>4</li>

            <li>5</li>

            <li>6</li>
          </ul>

          <ul className='weather16days-list'>
            <li>
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>

            <li>
              {' '}
              <img
                className='weather16days-img'
                src={require('../img/logo.png')}
                alt=''
                srcset=''
              />
            </li>
          </ul>

          <ul className='weather16days-list'>
            <li>25&#176;</li>

            <li>23&#176;</li>

            <li>25&#176;</li>

            <li>27&#176;</li>

            <li>28&#176;</li>

            <li>29&#176;</li>

            <li>30&#176;</li>
          </ul>

          <ul className='weather16days-list'>
            <li>18&#176;</li>

            <li>15&#176;</li>

            <li>14&#176;</li>

            <li>14&#176;</li>

            <li>16&#176;</li>

            <li>17&#176;</li>

            <li>17&#176;</li>
          </ul>
          <hr className='weather16days-line' />
        </div>
      </div>
    </div>
  );
};

export default Weather5Days;
