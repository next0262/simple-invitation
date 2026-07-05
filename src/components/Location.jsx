import React from 'react';
import './Location.css';
import { HiOutlineMapPin } from 'react-icons/hi2';

const Location = () => {
  return (
    <section className='location__container' id='location'>
      <div>
        <h2 className='section__title'>플레이스 플로라</h2>
        <span className='section__subtitle'>
          가을홀
          <br />
          7.18 (토) 오후 4:30
          <br />
          대전 동구 회남로 57-54
        </span>
      </div>

      {/* Venue Images — 좌: 홀(2/3), 우: 입구(1/3) */}
      <div className='location__wrapper'>
        <img
          src='/images/venue_hall.jpg'
          alt='플레이스 플로라 가을홀'
          className='location__img location__img--main'
        />
        <img
          src='/images/venue_sign.png'
          alt='플레이스 플로라 입구'
          className='location__img location__img--sub'
        />
      </div>

      {/* Navigation Link */}
      <div className='location-button-group-wrapper'>
        <div className='button-group'>
          <a
            href='https://naver.me/G6Rd8aOI'
            target='_blank'
            rel='noreferrer'
            className='button button-primary button--flex'
          >
            네이버지도
            <HiOutlineMapPin className='button--flex--icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
