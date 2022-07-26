import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Main from './Pages/Main';
import Footer from './components/Footer';
import NewsPage from './Pages/NewsPage';
import SevereWeatherAlert from './Pages/SevereWeatherAlert';

import { useSelector, useDispatch } from 'react-redux';
import { setLat, setLng } from './redux/services/getCoords';
import { Routes, Route } from 'react-router-dom';

import {
  useGetCurrentWeatherLocationQuery,
  useGetSevereWeatherAlertsQuery,
} from './redux/services/weatherData';

import './App.css';

function App() {
  const coords = useSelector((state) => state.setCoords);
  const dispatch = useDispatch();

  const [userCoords, setUserCoords] = useState(coords);

  const { lat, lng } = userCoords;

  // const data = { lat: 51.1657, lng: 10.4515 };

  const { data } = useGetCurrentWeatherLocationQuery({ lng, lat });

  const { data: weatherAlerts } = useGetSevereWeatherAlertsQuery({
    lng: 15.090278,
    lat: 37.5,
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
      <Navbar data={data} />
      <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/news' element={<NewsPage />} />
          <Route
            path='/alert'
            element={<SevereWeatherAlert weatherAlerts={weatherAlerts} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
