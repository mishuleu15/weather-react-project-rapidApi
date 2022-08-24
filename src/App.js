import Navbar from './components/Navbar';
import Main from './Pages/Main';
import Footer from './components/Footer';
import NewsPage from './Pages/NewsPage';
import SevereWeatherAlert from './Pages/SevereWeatherAlert';
import Weather48Hours from './Pages/Weather48Hours';
import Weather14Days from './Pages/Weather14Days';
import WeatherDetails from './Pages/WeatherDetails';

import { useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { useGetCurrentWeatherLocationQuery } from './redux/services/weatherData';

import './App.css';

function App() {
  const coords = useSelector((state) => state.setCoords);

  const { lat, lng } = coords;

  const { data } = useGetCurrentWeatherLocationQuery({ lng, lat });

  return (
    <div className='App'>
      <Navbar data={data} />

      <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/alert' element={<SevereWeatherAlert />} />
          <Route path='/weather48h' element={<Weather48Hours />} />
          <Route path='/weather14d' element={<Weather14Days />} />
          <Route path='/weather/:dayId' element={<WeatherDetails />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
