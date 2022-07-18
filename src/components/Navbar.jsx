import React from 'react';

import { useGetCurrentWeatherLocationQuery } from '../redux/services/weatherData';

const Navbar = () => {
  const lon = 26.3585792;
  const lat = 46.9336064;
  const { data } = useGetCurrentWeatherLocationQuery({ lon, lat });

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    const { data: weatherData } = data;
    return (
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <img
            className='navbar-image'
            src={require('../img/weather.png')}
            alt='...'
          />
          <a className='navbar-brand' href='/#'>
            RoboWeather
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Link
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='/#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <h2 className='nav-link city-name'>
                  {weatherData[0]?.city_name}
                </h2>
              </li>
            </ul>

            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
