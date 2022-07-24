import React, { useEffect } from 'react';

import Card from '../components/Card';
import CardList from '../components/CardList';
import CardLink from '../components/CardLink';
import Map from '../components/Map';
import NewsCard from '../components/NewsCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div
        className='spinner-grow'
        style={{ width: '10rem', height: '10rem' }}
        role='status'
      ></div>
    );
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
              <NewsCard simplified />
            </Col>
          </Row>
        </Container>
        <Map />
      </div>
    );
  }
};

export default Main;
