import React from 'react';
import style from './index.module.css';
import registerIcon from './assets/register.svg';
import newsIcon from './assets/news.svg';
import reviewsIcon from './assets/reviews.svg';
import commentsIcon from './assets/comments.svg';
import shareIcon from './assets/share.svg';

const guideItems = [
  { text: 'REGISTER', icon: registerIcon },
  { text: 'NEWS', icon: newsIcon },
  { text: 'REVIEWS', icon: reviewsIcon },
  { text: 'COMMENTS', icon: commentsIcon },
  { text: 'SHARE', icon: shareIcon },
];

const Guide = () => (
  <section className={style.container}>
    <img
      className={`${style.image} ${style.imageLeft}`}
      src="https://gamefi.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-widget-1.ce116612.png&w=256&q=75"
      alt="BackgroundLeft"
    />
    <img
      className={`${style.image} ${style.imageRight}`}
      src="https://gamefi.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-widget-2.6dfc9cf8.png&w=256&q=75"
      alt="BackgroundRight"
    />
    <div className={style.guideContainer}>
      <h2>SMOOTH TO JOIN &amp; COMMENT</h2>
      <div className={style.moduleContainer}>
        <div className={style.module}>
          <img
            src={registerIcon}
            alt="REGISTER"
          />
          <p>REGISTER</p>
        </div>
        <div className={style.divider} />
        <div className={style.module}>
          <img
            src={newsIcon}
            alt="NEWS"
          />
          <p>NEWS</p>
        </div>
        <div className={style.divider} />
        <div className={style.module}>
          <img
            src={reviewsIcon}
            alt="REVIEWS"
          />
          <p>REVIEWS</p>
        </div>
        <div className={style.divider} />
        <div className={style.module}>
          <img
            src={commentsIcon}
            alt="COMMENTS"
          />
          <p>COMMENTS</p>
        </div>
        <div className={style.divider} />
        <div className={style.module}>
          <img
            src={shareIcon}
            alt="SHARE"
          />
          <p>SHARE</p>
        </div>
      </div>
    </div>
  </section>
);

export default Guide;
