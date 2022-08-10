import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SearchBox from '../utils/searchBox';

import { Link } from 'react-router-dom';

function NavScrollExample({ data }) {
  const [name, setName] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

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
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
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
                {weatherData[0]?.city_name}
              </h2>
            </Nav>

            <Form className='d-flex' onSubmit={handleSubmit}>
              <SearchBox />
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
                value={name}
                onChange={handleNameChange}
              />

              <Button variant='outline-success' type='submit'>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavScrollExample;
