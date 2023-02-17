import { Box, Typography } from '@mui/material';
import React from 'react';
import style from './index.module.css';

const Guide = () => (
  <Box className={style.container}>
    <Box className={`${style.image} ${style.imageLeft}`} />
    <Box className={style.giudeContainer}>
      <Typography variant="h6">Lorem ipsum dolor sit amet consectetur.</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6"> 1 ———— 2 ———— 3 ———— 4 ———— 5</Typography>
      </Box>
    </Box>
    <Box className={`${style.image} ${style.imageRight}`} />
  </Box>
);

export default Guide;
