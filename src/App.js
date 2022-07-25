import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Main from './Pages/Main';
import Footer from './components/Footer';
import NewsPage from './Pages/NewsPage';

import { useSelector, useDispatch } from 'react-redux';
import { setLat, setLng } from './redux/services/getCoords';
import { Routes, Route } from 'react-router-dom';

import {
  useGetCurrentWeatherLocationQuery,
  useGetSevereWeatherAlertsQuery,
} from './redux/services/weatherData';

import './App.css';

function App() {
  const count = useSelector((state) => state.setCoords);
  const dispatch = useDispatch();

  const [coords, setCoords] = useState(count);

  const { lat, lng } = coords;

  const data = { lat: 51.1657, lng: 10.4515 };

  // const { data } = useGetCurrentWeatherLocationQuery({ lng, lat });

  const { data: weatherAlerts } = useGetSevereWeatherAlertsQuery({
    lng,
    lat,
  });

  console.log(weatherAlerts);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(setLat(latitude));
        dispatch(setLng(longitude));
        setCoords(count);
      }
    );
  }, [count, dispatch]);

  return (
    <div className='App'>
      <Navbar data={data} />
      <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Main data={data} />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
