import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import theme from '@/styles/theme';
import style from './index.module.css';

interface Props {
  title: string;
}

const ContainerHeader = ({ title }: Props) => (
  <Box className={style.containerHeader}>
    <Box className={style.headerLeft}>
      <Typography>{title}</Typography>
      <Typography
        className={style.headerLeftSubtitle}
        color={theme.color.main}
      >
        7 DAYS
      </Typography>
    </Box>
    <Link
      className={style.headerLink}
      to="/#"
      style={{ color: theme.color.main }}
    >
      VIEW ALL
    </Link>
  </Box>
);
export default ContainerHeader;
