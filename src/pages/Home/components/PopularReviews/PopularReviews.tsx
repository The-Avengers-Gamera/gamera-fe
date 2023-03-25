// import { Card } from '@mui/material';
// import React from 'react';
import { useState, useEffect } from 'react';

import ReviewCard from './components/ReviewCard';

import GeneralContainer from '../GeneralContainer';
import ContainerHeader from '../ContainerHeader';
import { getArticles } from '@/services/article';
import { IArticleCard } from '@/interfaces/article';
import { nowToCreated } from '@/utils/time';

const PopularReviews = () => {
  const [reviewCards, setReviewCards] = useState<IArticleCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFail, setIsFail] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>('Loading...');

  useEffect(() => {
    getArticles('reviews', {
      page: 1,
      size: 8,
      platform: 'all',
      genre: '',
    })
      .then((res) => {
        setReviewCards(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setMsg(err.error);
        setIsFail(true);
        setMsg('Fail to load');
      });
  }, []);

  return (
    <GeneralContainer
      sx={{ padding: '0.5rem 7rem 3rem' }}
      header={
        <ContainerHeader
          padding="3rem 7rem 0rem"
          title="POPULAR REVIEWS"
        />
      }
      laptop={3}
      mobile={6}
      divider
    >
      {isLoading
        ? [msg]
        : reviewCards?.map((reviewCard) => (
            <ReviewCard
              key={reviewCard.id}
              meta={{
                id: reviewCard.id,
                title: reviewCard.title,
                publishTime: nowToCreated(reviewCard.createdTime),
                author: reviewCard.author.name,
                coverUrl: reviewCard.coverImgUrl,
              }}
            />
          ))}
    </GeneralContainer>
  );
};
export default PopularReviews;
