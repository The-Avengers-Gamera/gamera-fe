import React, { useState } from 'react';
import styled from 'styled-components';
import TrendingNews from './components/TrendingNews/TrendingNews';
import ArticlesShowCase from '../ArticlesShowCase';
import { EArticleType } from '@/constants/article';

const articleType = EArticleType.NEWS;

const PageContainer = styled.div`
  /* TODO: use theme */
  background-color: ${({ theme }) => theme.color.bg_primary};

  padding-top: 100px;
`;

const NewsPageV2 = () => {
  return (
    <PageContainer>
      <TrendingNews />
      <ArticlesShowCase articleType={articleType} />
    </PageContainer>
  );
};

export default NewsPageV2;
