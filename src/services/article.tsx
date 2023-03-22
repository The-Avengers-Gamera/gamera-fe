import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IArticle, IArticleCard, IArticlePost, IArticlePut } from '@/interfaces/article';
import { ISearchArticle } from '@/interfaces/search';
import { IPage } from '@/interfaces/page';

export const createArticle = async (article: IArticlePost): Promise<AxiosResponse<IArticle>> =>
  apiClient.post('/articles', article);

export const updateArticleById = async (
  articlePut: IArticlePut,
  id: number
): Promise<AxiosResponse<IArticle>> => apiClient.put(`/articles/${id}`, articlePut);

export const getArticleById = async (id: number): Promise<AxiosResponse<IArticle>> =>
  apiClient.post(`/articles/${id}`);

export const deleteArticleById = async (id: number): Promise<AxiosResponse<string>> =>
  apiClient.delete(`/articles/${id}`);

export const getArticles = async (
  queryType: 'news' | 'reviews',
  { page = 1, size = 20, platform = 'all', genre = '' }: ISearchArticle
): Promise<IPage<IArticleCard[]>> => {
  const response = await apiClient.get(
    `/articles/${queryType}?page=${page}&limit=${size}&platform=${platform}&genre=${genre}`
  );
  return response.data;
};

export const getNews = async (): Promise<AxiosResponse<IPage<IArticle[]>>> =>
  apiClient.get(`/articles/news`);

export const getPopularReviews = async () =>
  apiClient({
    method: 'GET',
    url: '/articles/reviews/comment-num',
  });

// const { fetchData, data, loading, error } = useAxiosFetch({
//   method: "GET",
//   url: "/tutorials",
//   params: {
//     title: searchTitle,
//   },
// });
