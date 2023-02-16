import { Box, Button, Container } from '@mui/material';
import React from 'react';
import style from './index.module.css';
import theme from '@/styles/theme';

const Header = () => (
  <Container>
    <Box className={style.container}>
      <Button variant="contained" sx={{ bgcolor: theme.color.main }} className={style.headerBtn}>
        LOGIN/SIGNUP
      </Button>
    </Box>
  </Container>
);

export default Header;
