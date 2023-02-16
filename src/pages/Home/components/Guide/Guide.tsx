import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Guide = () => (
  <Container>
    <Box
      sx={{
        p: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
      <Box>1-2-3-4-5</Box>
    </Box>
  </Container>
);

export default Guide;
