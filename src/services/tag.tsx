import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { ITagSlim } from '../interfaces/tag';

export const getTags = async (): Promise<AxiosResponse<ITagSlim[]>> => apiClient.get('/tags');
