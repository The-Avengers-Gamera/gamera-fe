import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IGenre, IGenrePostAndPut } from '@/interfaces/genre';

export const createGenre = async (genrePost: IGenrePostAndPut): Promise<AxiosResponse<IGenre>> =>
  apiClient.post('/genres', genrePost);

export const createMultipleGenre = async (
  genreList: Array<IGenre>
): Promise<AxiosResponse<IGenre>> => apiClient.post('/genres/multiple', genreList);

export const getMultipleGenre = async (genreNmaes: object): Promise<AxiosResponse<Array<IGenre>>> =>
  apiClient.get('/genres/multiple', genreNmaes);

export const getGenreById = async (id: number): Promise<AxiosResponse<IGenre>> =>
  apiClient.get(`/genera/${id}`);

export const updateGeneraById = async (
  id: number,
  genrePut: IGenrePostAndPut
): Promise<AxiosResponse<IGenre>> => apiClient.put(`/genera/${id}`, genrePut);
