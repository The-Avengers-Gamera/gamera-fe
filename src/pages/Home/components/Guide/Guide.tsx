import { Box, Typography } from '@mui/material';
import React from 'react';
import style from './index.module.css';
import { titleFont } from '../../utils/useFont';
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
  <Box className={style.container}>
    <Box className={`${style.image} ${style.imageLeft}`} />
    <Box className={style.giudeContainer}>
      <Typography
        variant="h6"
        sx={titleFont}
      >
        SMOOTH TO JOIN & COMMENT
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            gap: 24,
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Alumni Sans, sans-serif',
            fontSize: '18px',
          }}
        >
          {guideItems.map((item) => (
            <div key={item.text}>
              <img
                src={item.icon}
                alt={item.text}
              />
              <span>{item.text}</span>
            </div>
          ))}
        </Typography>
      </Box>
    </Box>
    <span className={`${style.image} ${style.imageRight}`} />
  </Box>
);

export default Guide;
