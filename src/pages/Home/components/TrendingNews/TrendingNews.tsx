import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import theme from '@/styles/theme';
import GeneralContainer from '../GeneralContainer';

import style from './index.module.css';
import HomeNewsCard from './HomeNewsCard/HomeNewsCard';
import { titleFont } from '../../utils/useFont';
import { getArticles } from '@/services/article';
import { IArticleCard } from '@/interfaces/article';
import { nowToCreated } from '@/utils/time';
import { ArticleType, Platform } from '@/constants/article';
import TrendingNewsLoading from './HomeNewsCard/TrendingNewsLoading';

const inLoading = [1, 2, 3, 4, 5, 6];

const TrendingNews = () => {
  const [newsCards, setNewsCards] = useState<IArticleCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [msg, setMsg] = useState<string>('Loading...');

  useEffect(() => {
    getArticles(ArticleType.NEWS, {
      page: 1,
      size: 6,
      platform: Platform.All,
      genre: 'all',
    })
      .then((res) => {
        setNewsCards(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setMsg(err.error);
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
        sx={{ padding: '2rem 7% 3rem' }}
        laptop={3.7}
        mobile={5.7}
        rowGapPx="30px"
      >
        {isLoading
          ? inLoading.map((index) => <TrendingNewsLoading key={index} />)
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
