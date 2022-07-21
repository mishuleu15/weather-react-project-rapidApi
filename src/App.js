import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Main from './Pages/Main';
import Footer from './components/Footer';
import NewsPage from './Pages/NewsPage';

import { Routes, Route } from 'react-router-dom';

import { useGetCurrentWeatherLocationQuery } from './redux/services/weatherData';

import './App.css';

function App() {
  const [coords, setCoords] = useState({ lng: -73.935242, lat: 40.73061 });

  const { lat, lng } = coords;

  const { data } = useGetCurrentWeatherLocationQuery({ lng, lat });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

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
