import apiClient from '@/utils/apiClient';
import { IArticle, IArticlePost } from '@/interfaces/article';

export const createArticle = async (article: IArticlePost): Promise<IArticle[]> =>
  apiClient.post('/articles', article);

export const getArticleById = async (id: number): Promise<IArticle> =>
  apiClient.post(`/articles/${id}`);
