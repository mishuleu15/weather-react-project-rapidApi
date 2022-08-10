import React from 'react';
import { Link } from 'react-router-dom';

import { useGetWeatherNewsQuery } from '../redux/services/weatherNews';

const NewsCard = ({ simplified }) => {
  const { data: weatherNews } = useGetWeatherNewsQuery({
    count: simplified ? 5 : 25,
  });

  if (weatherNews === undefined) {
    return (
      <div
        className='spinner-grow'
        style={{ width: '10rem', height: '10rem' }}
        role='status'
      ></div>
    );
  } else {
    return (
      <>
        {simplified && <h3 className='news-title'>Top Stories</h3>}
        {weatherNews?.value?.map((news) => {
          return (
            <a
              href={news.url}
              target='_blank'
              className='card-link'
              key={news.name}
              rel='noreferrer'
            >
              <div
                className='card card-news mb-3'
                style={{ maxWidth: '540px' }}
              >
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img
                      src={
                        news?.image?.thumbnail?.contentUrl ||
                        'https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                      }
                      className='img-fluid rounded-start'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        {news?.name.slice(0, 50)}...
                      </h5>
                      <p className='card-text'>
                        {news?.description.slice(0, 75)}...
                      </p>
                      <p className='card-text'></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
        <h3>
          {simplified ? (
            <Link to='/news' className='links-cardNews'>
              Show More &rarr;
            </Link>
          ) : (
            <Link to='/' className='links-cardNews'>
              &larr; Back
            </Link>
          )}
        </h3>
      </>
    );
  }
};

export default NewsCard;
