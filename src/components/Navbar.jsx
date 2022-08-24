import { useState } from 'react';

import Search from './Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch } from 'react-redux';
import { setLat, setLng } from '../redux/services/getCoords';
import { Link } from 'react-router-dom';

function NavScrollExample({ data }) {
  const [searchData, setSearchData] = useState(null);
  const dispatch = useDispatch();

  const handleOnSearchChange = (searchData) => {
    const { value, label } = searchData;
    setSearchData(label);
    dispatch(setLat(value.lat));
    dispatch(setLng(value.long));
  };

  if (!data) {
    return;
  } else {
    const { data: weatherData } = data;

    return (
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <img
            className='navbar-image'
            src={require('../img/weather.png')}
            alt='...'
          />
          <Link className='navbar-brand' to='/'>
            RoboWeather
          </Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' navbarScroll>
              <Link className='nav-link active' aria-current='page' to='/'>
                TODAY
              </Link>
              <Link className='nav-link' to='/weather48h'>
                HOURLY
              </Link>
              <Link className='nav-link' to='/weather14d'>
                14 DAYS
              </Link>
              <Link className='nav-link' to='/news'>
                NEWS
              </Link>
              <Link className='nav-link' to='/alert'>
                SEVERE WEATHER
              </Link>
              <h2 className='nav-link city-name'>
                {searchData === null ? weatherData[0]?.city_name : searchData}
              </h2>
            </Nav>
            <div className='search-container'>
              <Search onSearchChange={handleOnSearchChange} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavScrollExample;
