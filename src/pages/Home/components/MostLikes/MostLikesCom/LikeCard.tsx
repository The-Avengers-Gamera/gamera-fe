import { Box, Typography } from '@mui/material';
import React from 'react';
// import style from './index.module.css';

// @ts-ignore
const LikeCard = () => (
  <div className="LikeCard">
    This is like card
    <div className="articleCover">This is cover</div>
    <Typography className="articleTitle">This is article title</Typography>
    <Box className="commentNumber">This is comment number</Box>
    <Box className="likeNumber">This is like number</Box>
  </div>
);

export default LikeCard;
