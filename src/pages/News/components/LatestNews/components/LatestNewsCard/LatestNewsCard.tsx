import { Box, Typography } from '@mui/material';
import React from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import style from './index.module.css';
import theme from '@/styles/theme';

type Props = {
  title: string;
  subTitle: string;
  authorName: string;
  commentsNum: number;
  likesNum: number;
  imageSrc: string;
};

const LatestNewsCard = ({
  title,
  subTitle,
  authorName,
  commentsNum,
  likesNum,
  imageSrc,
}: Props) => (
  <Box className={style.cardContainer}>
    <Box
      className={style.cardPicture}
      sx={{
        background: `url(${imageSrc}) center/cover`,
        backgroundRepeat: 'no-repeat',
      }}
    />
    <Box className={style.cardInfoContainer}>
      <Box>
        <Typography
          className={style.infoStyle}
          sx={{
            fontSize: '1.1rem',
            fontWeight: '700',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: '400',
          }}
          className={style.infoStyle}
        >
          {subTitle}
        </Typography>
      </Box>
      <Box className={style.infoBottom}>
        <Box className={style.infoBottomGroup}>
          <PersonRoundedIcon sx={{ color: theme.color.main }} />
          <Typography component="span">{authorName}</Typography>
        </Box>
        <Box className={style.infoBottomGroup}>
          <ChatRoundedIcon sx={{ color: theme.color.main }} />
          <Typography component="span">{commentsNum}</Typography>
        </Box>
        <Box className={style.infoBottomGroup}>
          <FavoriteRoundedIcon sx={{ color: 'red' }} />
          <Typography component="span">{likesNum}</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default LatestNewsCard;
