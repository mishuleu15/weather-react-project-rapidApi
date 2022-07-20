import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import Main from './Pages/Main';
import Footer from './components/Footer';
import NewsPage from './Pages/NewsPage';

import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
