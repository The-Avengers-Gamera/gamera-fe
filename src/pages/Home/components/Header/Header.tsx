import { Button, Container } from '@mui/material';
import React from 'react';
import style from './index.module.css';

const Header = () => (
  <Container className={style.container}>
    <Button className={style.headerBtn}>LOGIN/SIGNUP</Button>
  </Container>
);

export default Header;
