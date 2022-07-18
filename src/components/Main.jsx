import React from 'react';

import Card from './Card';
import CardList from './CardList';
import CardLink from './CardLink';
import Map from './Map';

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
        <Card data={data} />

        <Container fluid>
          <Row>
            <Col>
              <CardList data={data} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardLink />
            </Col>
            <Col>
              <CardLink />
            </Col>

            <Col>
              <CardLink />
            </Col>
          </Row>
        </Container>

        <Map />
      </div>
    );
  }
};

export default Main;
