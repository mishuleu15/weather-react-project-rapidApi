import React from 'react';

import { useParams } from 'react-router-dom';

import uvIndexCalc from '../utils/uvIndex';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import { useGet14daysForecastQuery } from '../redux/services/weatherData';

import millify from 'millify';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faDroplet } from '@fortawesome/free-solid-svg-icons';

library.add(faDroplet);

const WeatherDetails = () => {
  const { dayId } = useParams();

  const coords = useSelector((state) => state.setCoords);
  const { lat, lng } = coords;

  const { data: weather14Days } = useGet14daysForecastQuery({
    lng,
    lat,
  });

  const dateToDayName = (date) => {
    let dateTransform = date.replace(/\W/g, '/');
    let newDate = new Date(dateTransform);
    let weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      newDate
    );

    return weekDay;
  };

  return (
    <>
      <h3 className='weatherDetails-heading'>
        {dateToDayName(weather14Days.data[dayId].datetime)},{' '}
        {weather14Days.data[dayId].datetime.slice(8, 10)}
      </h3>
      <hr />
      <div className='weather48Hours-container weatherDetails'>
        <Container fluid>
          <Row>
            <Col>
              <Accordion
                defaultActiveKey='1'
                className='weather48Hours-element'
                key={weather14Days.data[dayId].datetime}
              >
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <img
                      className='weather48Hours-img'
                      src={`https://www.weatherbit.io/static/img/icons/${weather14Days.data[dayId]?.weather?.icon}.png`}
                      alt='weather-icon'
                    />
                    <span className='weather48Hours-temp'>
                      {weather14Days.data[dayId].app_max_temp.toFixed(0)}&#176;
                    </span>
                    <span className='weather48Hours-realFeelTemp'>
                      <div>
                        <div>Min Temp</div>
                        {weather14Days.data[dayId].app_min_temp}&#176;
                      </div>
                    </span>
                    <span className='weather48Hours-precip'>
                      <FontAwesomeIcon
                        icon='fa-xs fa-solid fa-droplet'
                        size='1x'
                      />{' '}
                      {weather14Days.data[dayId].precip.toFixed(2)} mm
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div
                      id='example-collapse-text'
                      className='collapse-text weather-details-text'
                    >
                      <ListGroup variant='flush'>
                        <ListGroup.Item>
                          <div>Wind</div>{' '}
                          <div>
                            {weather14Days.data[dayId].wind_cdir}{' '}
                            {millify(weather14Days.data[dayId].wind_spd)} km/h
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div className='left'>Wind Gusts</div>
                          <div>
                            {weather14Days.data[dayId].wind_gust_spd} m/s
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div className='left'>Humidity</div>
                          <div>{weather14Days.data[dayId].rh}%</div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div className='left'>Max UV Index</div>
                          <div>
                            {weather14Days.data[dayId].uv.toFixed()}{' '}
                            {uvIndexCalc(
                              weather14Days.data[dayId].uv.toFixed()
                            )}
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                      <hr className='list-group-separator' />
                      <ListGroup
                        variant='flush'
                        className='collapse-text-colon2'
                      >
                        <ListGroup.Item>
                          <div>Ozone</div>
                          <div className='right'>
                            {weather14Days.data[dayId].ozone.toFixed(0)} DU
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div>Seal Lvl Pressure</div>
                          <div className='right'>
                            {weather14Days.data[dayId].slp.toFixed(0)} mb
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div>Wind direction</div>
                          <div className='right'>
                            {weather14Days.data[dayId].wind_dir.toFixed(0)}
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div>Precipitation</div>
                          <div className='right'>
                            {weather14Days.data[dayId].pop.toFixed(0)}%
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
                            {weather14Days.data[dayId].dewpt.toFixed(0)}&#8451;
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div>Cloud Cover</div>
                          <div className='right'>
                            {weather14Days.data[dayId].clouds.toFixed(0)}%
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div>Visibility</div>
                          <div className='right'>
                            {weather14Days.data[dayId].vis.toFixed(0)} Km
                          </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <div>Pressure</div>
                          <div className='right'>
                            {weather14Days.data[dayId].pres.toFixed(0)} mb
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                    <hr />
                    <div>Weather</div>
                    <h6 className='right'>
                      {weather14Days.data[dayId].weather.description}
                    </h6>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WeatherDetails;
