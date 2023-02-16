import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import style from './index.module.css';

const Guide = () => (
  <Container>
    <Box className={style.container}>
      <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
      <Box>1-2-3-4-5</Box>
    </Box>
  </Container>
);

export default Guide;
