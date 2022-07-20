import React, { useEffect } from 'react';

import NewsCard from '../components/NewsCard';

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className='weatherNews-title'>Weather Stories</h1>
      <hr />
      <div className='container-newsPage'>
        <NewsCard />
      </div>
    </>
  );
};

export default NewsPage;
