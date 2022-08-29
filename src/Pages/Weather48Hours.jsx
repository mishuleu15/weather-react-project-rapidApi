import React from 'react';

import NewsCard from '../components/NewsCard';
import uvIndexCalc from '../utils/uvIndex';
import timeConvert from '../utils/convertTime';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import millify from 'millify';
import { useSelector } from 'react-redux';

import { useGet48HourForecastQuery } from '../redux/services/weatherData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faDroplet } from '@fortawesome/free-solid-svg-icons';

library.add(faDroplet);

const Weather48Hours = () => {
  const coords = useSelector((state) => state.setCoords);
  const { lat, lng } = coords;

  const { data: weather48Hours } = useGet48HourForecastQuery({
    lat,
    lng,
  });

  console.log(weather48Hours);

  if (!weather48Hours) {
    <div
      className='spinner-grow'
      style={{ width: '10rem', height: '10rem' }}
      role='status'
    ></div>;
  } else {
    return (
      <div className='weather48Hours-container'>
        <Container fluid>
          <Row>
            <Col lg={6} md={12} sm={12}>
              {weather48Hours?.data.map((data) => {
                return (
                  <Accordion
                    defaultActiveKey='0'
                    className='weather48Hours-element'
                    key={data.datetime}
                  >
                    <Accordion.Item eventKey='1'>
                      <Accordion.Header>
                        <div>{timeConvert(data.timestamp_local.slice(11))}</div>
                        <img
                          className='weather48Hours-img'
                          src={`https://www.weatherbit.io/static/img/icons/${data?.weather?.icon}.png`}
                          alt='weather-icon'
                        />
                        <span className='weather48Hours-temp'>
                          {data.temp.toFixed(0)}&#176;
                        </span>
                        <span className='weather48Hours-realFeelTemp'>
                          <div>
                            <div>RealFeel</div>
                            {data.app_temp}&#176;
                          </div>
                        </span>
                        <span className='weather48Hours-precip'>
                          <FontAwesomeIcon
                            icon='fa-xs fa-solid fa-droplet'
                            size='1x'
                          />{' '}
                          {data.precip.toFixed(2)} mm
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div
                          id='example-collapse-text'
                          className='collapse-text'
                        >
                          <ListGroup variant='flush'>
                            <ListGroup.Item>
                              <div>Wind</div>{' '}
                              <div>
                                {data.wind_cdir} {millify(data.wind_spd)} km/h
                              </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <div className='left'>Wind Gusts</div>
                              <div>{data.wind_gust_spd} m/s</div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <div className='left'>Humidity</div>
                              <div>{data.rh}%</div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <div className='left'>Max UV Index</div>
                              <div>
                                {data.uv.toFixed()}{' '}
                                {uvIndexCalc(data.uv.toFixed())}
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                          <hr className='list-group-separator' />
                          <ListGroup
                            variant='flush'
                            className='collapse-text-colon2'
                          >
                            <ListGroup.Item>
                              <div>Dew Point</div>
                              <div className='right'>
                                {data.dewpt.toFixed(0)}&#8451;
                              </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <div>Cloud Cover</div>
                              <div className='right'>
                                {data.clouds.toFixed(0)}%
                              </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <div>Visibility</div>
                              <div className='right'>
                                {data.vis.toFixed(0)} Km
                              </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                              <div>Pressure</div>
                              <div className='right'>
                                {data.pres.toFixed(0)} mb
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </div>
                        <hr />
                        <div>Weather</div>
                        <h6 className='right'>{data.weather.description}</h6>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              })}
            </Col>

            <Col className='weather48Hours-news' lg={6}>
              <NewsCard simplified />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Weather48Hours;
