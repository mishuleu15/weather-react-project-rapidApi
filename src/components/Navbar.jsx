import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = ({ data }) => {
  if (!data) {
    return;
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
          <Link className='navbar-brand' to='/'>
            RoboWeather
          </Link>
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
                <Link className='nav-link active' aria-current='page' to='/'>
                  TODAY
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/weather48h'>
                  HOURLY
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/weather14d'>
                  14 DAYS
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/news'>
                  NEWS
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/alert'>
                  SEVERE WEATHER
                </Link>
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
