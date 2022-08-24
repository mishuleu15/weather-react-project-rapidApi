import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useGetSevereWeatherAlertsQuery } from '../redux/services/weatherData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCloudBolt,
  faTornado,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCloudBolt, faTornado, faGlobe);

const SevereWeatherAlert = () => {
  const coords = useSelector((state) => state.setCoords);
  const { lat, lng } = coords;

  const { data: weatherAlerts } = useGetSevereWeatherAlertsQuery({
    lat,
    lng,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [weatherAlerts]);

  if (!weatherAlerts) {
    return;
  } else {
    return (
      <div className='weather_alert-container'>
        <Container>
          <h2> {weatherAlerts.city_name}</h2>
          <h2>
            <FontAwesomeIcon icon='fa-solid fa-globe' />{' '}
            {weatherAlerts.timezone.replaceAll(/[^a-zA-Z0-9 ]/g, ', ')}
          </h2>
          <hr />
          {weatherAlerts.alerts.length !== 0 ? (
            <Row>
              {weatherAlerts.alerts.map((alert) => (
                <Col>
                  {
                    <Card className='text-center card-alert'>
                      <Card.Header className='alert-header'>
                        Region{' '}
                        <h4>{alert.regions !== null && alert?.regions[0]}</h4>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{alert?.title}</Card.Title>
                        <Card.Text className='alert-severity'>
                          Severity <h4>{alert?.severity}</h4>
                        </Card.Text>
                        <Card.Text className='alert-descrip'>
                          {alert?.description}
                        </Card.Text>
                        <Button variant='primary'>
                          <a
                            className='alert-link'
                            href={alert?.uri}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            More Info
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  }
                </Col>
              ))}
            </Row>
          ) : (
            <h1>No Weather Alerts</h1>
          )}
        </Container>
        <Link to='/' className='card-link alert'>
          <p className='card-link text-alert'>
            Go Back <span className='severe-weather'>&larr;</span>
          </p>
        </Link>
      </div>
    );
  }
};

export default SevereWeatherAlert;
