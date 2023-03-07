import { Box, Typography } from '@mui/material';
import React from 'react';
import banner from './assets/banner.png';
import style from './index.module.css';

const Guide = () => (
  <Box className={style.container}>
    <Box className={`${style.image} ${style.imageLeft}`} />
    <Box className={style.giudeContainer}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Alumni Sans, sans-serif',
          fontSize: '28px',
          fontWeight: 700,
          paddingBottom: '30px',
        }}
      >
        SMOOTH TO JOIN & COMMENT
      </Typography>
      <Box className={`${style.bannerContainer}`}>
        <img
          className={`${style.banner}`}
          src={banner}
          alt="banner"
        />
      </Box>
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
          <span>REGISTER</span>
          <span>NEWS</span>
          <span>REVIEWS</span>
          <span>COMMENTS</span>
          <span>SHARE</span>
        </Typography>
      </Box>
    </Box>
    <Box className={`${style.image} ${style.imageRight}`} />
  </Box>
);

export default Guide;
