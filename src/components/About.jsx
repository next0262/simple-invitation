import React from 'react';
import './About.css';
import aboutImg from '../assets/profile.jpg';
import {
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import { LiaBabySolid } from 'react-icons/lia';

// 유안이의 인생 업적 (실제 수행 날짜/상태) — 어울리는 이모지 bullet
const achievements = [
  { emoji: '🔄', label: '뒤집기 · 되집기', value: '습득 완 (25.11.10)', tone: 'done' },
  { emoji: '🐛', label: '배밀이', value: '습득 완 (26.3.6)', tone: 'done' },
  { emoji: '🐕', label: '네발기기', value: '습득 완 (26.5.13)', tone: 'done' },
  { emoji: '🚶', label: '걷기', value: '훈련 중 (물건 집고 일어섬)', tone: 'progress' },
  { emoji: '🍼', label: '탈분유', value: '임박 (하루 4끼 = 이유식 3 + 분유 1)', tone: 'progress' },
];

const About = () => {
  return (
    <section className='about__container' id='about'>
      <h2 className='section__title'>유안이를 소개합니다.</h2>

      <div className='about__layout'>
        {/* 사진 (좌) */}
        <img src={aboutImg} alt='유안이' className='about__img' />

        {/* 인생 업적 세로 카드 (사진 오른쪽) */}
        <div className='about__achievements'>
          <h3 className='about__ach-title'>
            <HiOutlineSparkles size={22} /> 유안이의 인생 업적
          </h3>
          <ul className='about__ach-list'>
            {achievements.map(({ emoji, icon: Icon, label, value, tone }) => (
              <li className='about__ach-item' key={label}>
                <span className='about__ach-emoji'>
                  {Icon ? <Icon size={26} /> : emoji}
                </span>
                <span className='about__ach-label'>{label}</span>
                <span className={`about__ach-value about__ach-value--${tone}`}>
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 하단 스탯 3칸 (출생일 · 키/몸무게 · 영유아검진) */}
        <div className='about__stats'>
          <div className='about__box'>
            <HiOutlineCalendarDays size={25} />
            <span className='about__subtitle'>출생일</span>
            <h3 className='about__title'>2025.07.21</h3>
          </div>

          <div className='about__box'>
            <LiaBabySolid size={25} />
            <span className='about__subtitle'>키/몸무게</span>
            <h3 className='about__title'>73.5cm/9.5kg</h3>
          </div>

          <div className='about__box about__box--check'>
            <HiOutlineCheckCircle size={25} />
            <span className='about__subtitle'>영유아 검진</span>
            <h3 className='about__title'>
              모든 게{' '}
              <span style={{ color: 'green', fontSize: '2.25rem' }}>정상</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
