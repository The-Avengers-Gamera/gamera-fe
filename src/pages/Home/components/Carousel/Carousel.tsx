import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import style from './index.module.css';
import theme from '@/styles/theme';

const Carousel = () => (
  <Grid sx={{ bgcolor: theme.color.bg_light }} container className={style.container}>
    <Grid className={style.containerGrid} mobile={10} laptop={10} item>
      <Box className={style.gridCarousel}>
        <Container className={style.carouselContent}>
          <Typography className={style.carouselText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </Typography>
          <Button
            className={style.carouselBtn}
            variant="contained"
            sx={{ bgcolor: theme.color.main }}
          >
            VIEW MORE➡
          </Button>
        </Container>
      </Box>
    </Grid>
  </Grid>
);

export default Carousel;
