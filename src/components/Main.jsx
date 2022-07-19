import React from 'react';

import Card from './Card';
import CardList from './CardList';
import CardLink from './CardLink';
import Map from './Map';
import NewsCard from './NewsCard';

import { useGetCurrentWeatherLocationQuery } from '../redux/services/weatherData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
  const lon = 26.3585792;
  const lat = 46.9336064;
  const { data } = useGetCurrentWeatherLocationQuery({ lon, lat });

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className='main-container'>
        <Container fluid>
          <Row>
            <Col className='weather-col'>
              <h3>Current Weather</h3>
              <hr />
              <Card data={data} />
              <CardList data={data} />

              <CardLink />
              <CardLink />
            </Col>

            <Col>
              <h3>Top Stories</h3>
              <hr />
              <NewsCard />
            </Col>
          </Row>
        </Container>

        <Map />
      </div>
    );
  }
};

export default Main;
