import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import theme from '@/styles/theme';
import GeneralContainer from '../GeneralContainer';

import style from './index.module.css';
import HomeNewsCard from './HomeNewsCard/HomeNewsCard';
import { titleFont } from '../../utils/useFont';
import { getArticles } from '@/services/article';
import { IArticleCard } from '@/interfaces/article';
import { nowToCreated } from '@/utils/time';

const TrendingNews = () => {
  const [newsCards, setNewsCards] = useState<IArticleCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFail, setIsFail] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>('Loading...');

  useEffect(() => {
    getArticles('news', {
      page: 1,
      size: 6,
      platform: 'all',
      genre: '',
    })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);

        setNewsCards(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setMsg(err.error);
        setIsFail(true);
        setMsg('Fail to load');
      });
  }, []);

  return (
    <div className={style.abc}>
      <GeneralContainer
        divider={false}
        header={
          <Box
            sx={{ bgcolor: theme.color.bg_primary }}
            className={style.title}
          >
            <Typography sx={titleFont}>TRENDING NEWS</Typography>
          </Box>
        }
        sx={{ padding: '2rem 3rem 3rem' }}
        laptop={3.7}
        mobile={5.7}
        rowGapPx="30px"
      >
        {isLoading
          ? [msg]
          : newsCards?.map((newsCard) => (
              <HomeNewsCard
                key={newsCard.id}
                meta={{
                  id: newsCard.id,
                  title: newsCard.title,
                  publishTime: nowToCreated(newsCard.createdTime),
                  author: newsCard.author.name,
                  coverUrl: newsCard.coverImgUrl,
                }}
              />
            ))}
      </GeneralContainer>
    </div>
  );
};
export default TrendingNews;
