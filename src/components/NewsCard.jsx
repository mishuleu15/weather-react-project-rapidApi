import React from 'react';

import { useGetWeatherNewsQuery } from '../redux/services/weatherNews';

const NewsCard = () => {
  const { data: weatherNews } = useGetWeatherNewsQuery({
    count: 5,
  });

  //   console.log(weatherNews.value.image);
  if (!weatherNews) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        {weatherNews.value.map((news) => {
          console.log(news);

          return (
            <a
              href={news.url}
              target='_blank'
              className='card-link'
              key={news.name}
            >
              <div
                className='card card-news mb-3'
                style={{ maxWidth: '540px' }}
              >
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={news.image.thumbnail.contentUrl}
                      className='img-fluid rounded-start'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        {news.name.slice(0, 50)}...
                      </h5>
                      <p className='card-text'>
                        {news.description.slice(0, 75)}...
                      </p>
                      <p className='card-text'></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
        <h3>More News</h3>
      </>
    );
  }
};

export default NewsCard;
