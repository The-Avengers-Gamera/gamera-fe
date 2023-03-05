import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IArticle, IArticlePost, IArticlePut } from '@/interfaces/article';

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
