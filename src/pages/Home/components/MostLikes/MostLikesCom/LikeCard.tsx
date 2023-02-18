import { Typography } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import React from 'react';
import style from './index.module.css';

// @ts-ignore
const LikeCard = () => (
  <div className={style.likeCard}>
    <div className={style.cover}>Put the cover</div>
    <div className="articleOverview">
      <Typography className="articleTitle">Hogwarts Legacy: How to Open Eye Chests</Typography>
      <div className="comment">
        <ChatRoundedIcon className={style.comment_icon}>This is comment number</ChatRoundedIcon>
        <Typography className="commentNum">2.6K</Typography>
      </div>
    </div>
    <div className={style.liked}>
      <FavoriteRoundedIcon className={style.heart}>This is cover</FavoriteRoundedIcon>
      <Typography className="LikedNum">10,311</Typography>
    </div>
  </div>
);

export default LikeCard;
