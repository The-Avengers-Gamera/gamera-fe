import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import style from './index.module.css';
import theme from '@/styles/theme';
import { titleFont } from '../../utils/useFont';

const Carousel = () => (
  <Box
    sx={{ bgcolor: theme.color.bg_primary }}
    className={style.container}
  >
    <Box className={style.carousel}>
      <Box className={style.carouselContent}>
        <Typography
          sx={titleFont}
          className={style.carouselText}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </Typography>
        <Button
          className={style.carouselBtn}
          variant="contained"
          sx={{ bgcolor: theme.color.primary, fontWeight: 'Semibold', fontFamily: 'Poppins' }}
        >
          VIEW MORE
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Carousel;
