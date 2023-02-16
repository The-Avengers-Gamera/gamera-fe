import { Box, Grid, ThemeProvider } from '@mui/material';
import React from 'react';
import style from './index.module.css';
import theme from '@/styles/theme';

const Carousel = () => (
  <ThemeProvider theme={theme}>
    <Grid sx={{ bgcolor: theme.color.bg_light }} container className={style.container}>
      <Grid mobile={12} laptop={8} item>
        <Box className={style.containerContent}> </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
);

export default Carousel;
