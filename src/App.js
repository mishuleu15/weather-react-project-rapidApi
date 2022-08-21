import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import NavbarTest from './components/NavbarTest';
import Main from './Pages/Main';
import Footer from './components/Footer';
import NewsPage from './Pages/NewsPage';
import SevereWeatherAlert from './Pages/SevereWeatherAlert';
import Weather48Hours from './Pages/Weather48Hours';
import Weather14Days from './Pages/Weather14Days';
import WeatherDetails from './Pages/WeatherDetails';

import { useSelector, useDispatch } from 'react-redux';
import { setLat, setLng } from './redux/services/getCoords';
import { Routes, Route } from 'react-router-dom';

import {
  useGetCurrentWeatherLocationQuery,
  useGetSevereWeatherAlertsQuery,
  useGet48HourForecastQuery,
  useGet16daysForecastQuery,
} from './redux/services/weatherData';

import { useGetCurrentCitiesLocationQuery } from './redux/services/getCities';

import './App.css';

function App() {
  const coords = useSelector((state) => state.setCoords);
  const dispatch = useDispatch();

  const [userCoords, setUserCoords] = useState(coords);

  const { lat, lng } = userCoords;

  // const data = { lat: 51.1657, lng: 10.4515 };

  const { data } = useGetCurrentWeatherLocationQuery({ lng, lat });

  // const { data: city } = useGetCurrentCitiesLocationQuery('piatra');

  // console.log(city);

  const { data: weatherAlerts } = useGetSevereWeatherAlertsQuery({
    lat,
    lng,
  });

  const { data: weather48Hours } = useGet48HourForecastQuery({
    lng,
    lat,
  });

  const { data: weather14Days } = useGet16daysForecastQuery({
    lng,
    lat,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(setLat(latitude));
        dispatch(setLng(longitude));
        setUserCoords(coords);
      }
    );
  }, [coords, dispatch]);

  return (
    <div className='App'>
      <NavbarTest data={data} />
      {/* <Navbar data={data} /> */}

      <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/news' element={<NewsPage />} />
          <Route
            path='/alert'
            element={<SevereWeatherAlert weatherAlerts={weatherAlerts} />}
          />
          <Route
            path='/weather48h'
            element={<Weather48Hours weather48Hours={weather48Hours} />}
          />
          <Route
            path='/weather14d'
            element={<Weather14Days weather14Days={weather14Days} />}
          />
          <Route
            path='/weather/:dayId'
            element={<WeatherDetails weather14Days={weather14Days} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
