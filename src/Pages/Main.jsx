import React, { useEffect } from 'react';

import Card from '../components/Card';
import CardList from '../components/CardList';
import CardLink from '../components/CardLink';
import Map from '../components/Map';
import NewsCard from '../components/NewsCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-container'>
      <Container fluid>
        <Row>
          <Col className='weather-col'>
            <h3>Current Weather</h3>
            <hr />
            <Card />
            <CardList />
            <CardLink />
          </Col>

          <Col sm={12} md={6}>
            <NewsCard simplified />
          </Col>
        </Row>
      </Container>
      <Map />
    </div>
  );
};

export default Main;
