import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { ArticleESearchResult } from '@/interfaces/search';

export const searchArticleByKeyword = async (
  keyword: string
): Promise<AxiosResponse<ArticleESearchResult[]>> => apiClient.get(`/search?keyword=${keyword}`);
