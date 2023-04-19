import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IArticle, IArticleCard, IArticlePost, IArticlePut } from '@/interfaces/article';
import { IArticleQuery } from '@/interfaces/search';
import { IPage } from '@/interfaces/page';
import { ArticleType, Platform, ReviewOrder, ReviewSort } from '@/constants/article';

export const createArticle = async (
  articleType: ArticleType,
  article: IArticlePost
): Promise<AxiosResponse<IArticle>> => apiClient.post(`/${articleType}`, article);

export const createReviewByChatGPT = async (gameId: number): Promise<AxiosResponse> =>
  apiClient.post(`/reviews/chat-gpt/${gameId}`);

export const updateArticleById = async (
  articlePut: IArticlePut,
  id: number
): Promise<AxiosResponse<IArticle>> => apiClient.put(`/articles/${id}`, articlePut);

export const getArticleById = async (id: number): Promise<AxiosResponse<IArticle>> =>
  apiClient.get(`/articles/${id}`);

export const deleteArticleById = async (id: number): Promise<AxiosResponse<string>> =>
  apiClient.delete(`/articles/${id}`);

export const getArticles = async (
  queryType: ArticleType,
  {
    page = 1,
    size = 20,
    platform = Platform.All,
    genre = 'all',
    sort = ReviewSort.CREATED_TIME,
    order = ReviewOrder.DESC,
  }: IArticleQuery
): Promise<IPage<IArticleCard[]>> => {
  const response = await apiClient.get(
    `/articles/${queryType}?platform=${platform}&genre=${genre}&page=${page}&size=${size}&sort=${sort}&order=${order}`
  );
  return response.data;
};

export const getNews = async (): Promise<AxiosResponse<IPage<IArticle[]>>> =>
  apiClient.get(`/articles/news`);

export const getArticlesOrderByLike = async (): Promise<AxiosResponse<IPage<IArticleCard[]>>> =>
  apiClient.get(`/articles/`);

export const getPopularReviews = async (): Promise<AxiosResponse<IPage<IArticleCard[]>>> =>
  apiClient.get('/articles/reviews/comment-num');
