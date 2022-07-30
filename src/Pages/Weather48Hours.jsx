import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import NewsCard from '../components/NewsCard';

const Weather48Hours = ({ weather48Hours }) => {
  console.log(weather48Hours?.data);

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join('').replaceAll(':00:00', ' '); // return adjusted time or original string
  }

  console.log(weather48Hours?.data);

  return (
    <div className='weather48Hours-container'>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} sm={12}>
            {weather48Hours?.data.map((data) => {
              return (
                <Accordion
                  defaultActiveKey='0'
                  className='weather48Hours-element'
                >
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                      <div>{tConvert(data.timestamp_local.slice(11))}</div>
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
                        {data.precip.toFixed(2)} mm
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div id='example-collapse-text' className='collapse-text'>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>Cras justo odio</ListGroup.Item>
                          <ListGroup.Item>
                            Dapibus ac facilisis in
                          </ListGroup.Item>
                          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                          <ListGroup.Item>
                            Porta ac consectetur ac
                          </ListGroup.Item>
                        </ListGroup>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>Cras justo odio</ListGroup.Item>
                          <ListGroup.Item>
                            Dapibus ac facilisis in
                          </ListGroup.Item>
                          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                          <ListGroup.Item>
                            Porta ac consectetur ac
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}
          </Col>

          <Col className='weather48Hours-news'>
            <NewsCard simplified />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Weather48Hours;
