import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IAuthority } from '@/interfaces/authority';

export const getAuthorityList = async (): Promise<AxiosResponse<Array<IAuthority>>> =>
  apiClient.get('/authorities');

export const getAuthorityById = async (id: number): Promise<AxiosResponse<IAuthority>> =>
  apiClient.get(`/authorities/${id}`);
