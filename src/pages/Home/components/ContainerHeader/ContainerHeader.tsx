import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import theme from '@/styles/theme';
import style from './index.module.css';
import { titleFont } from '../../utils/useFont';

interface Props {
  title: string;
  padding?: string;
}

const ContainerHeader = ({ title, padding }: Props) => (
  <Box
    className={style.containerHeader}
    sx={{ p: padding }}
  >
    <Box className={style.headerLeft}>
      <Typography sx={titleFont}>{title}</Typography>
      <Typography
        className={style.headerLeftSubtitle}
        color={theme.color.primary}
        sx={titleFont}
      >
        7 DAYS
      </Typography>
    </Box>
    <Link
      className={style.headerLink}
      to="/#"
      style={{ color: theme.color.primary, ...titleFont }}
    >
      VIEW ALL
    </Link>
  </Box>
);
export default ContainerHeader;
