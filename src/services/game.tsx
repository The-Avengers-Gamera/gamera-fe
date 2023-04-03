import { AxiosPromise, AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IGame, IGameCard, IGamePost, IGamePut } from '@/interfaces/game';

export const createGame = async (gamePost: IGamePost): Promise<AxiosPromise<IGame>> =>
  apiClient.post('/games', gamePost);

export const getGameById = async (id: number): Promise<AxiosPromise<IGame>> =>
  apiClient.get(`/games/${id}`);

export const updateGame = async (id: number, gamePut: IGamePut): Promise<AxiosPromise<IGame>> =>
  apiClient.put(`/games/${id}`, gamePut);

export const deleteGame = async (id: number): Promise<AxiosPromise<string>> =>
  apiClient.delete(`/games/${id}`);

export const getGames = async (): Promise<AxiosResponse<IGameCard[]>> => apiClient.get(`/games`);
