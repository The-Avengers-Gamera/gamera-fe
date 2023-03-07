import { Box } from '@mui/material';
import React from 'react';
import style from './index.module.css';

const Guide = () => (
  <Box className={style.container}>
    <span className={`${style.image} ${style.imageLeft}`} />
    <Box className={style.guideContainer}>
      Lorem ipsum dolor sit amet consectetur.
      <Box sx={{ mt: 2 }}>1 ———— 2 ———— 3 ———— 4 ———— 5</Box>
    </Box>
    <span className={`${style.image} ${style.imageRight}`} />
  </Box>
);

export default Guide;
