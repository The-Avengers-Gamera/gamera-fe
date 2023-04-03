import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import {
  IUser,
  IUserSignUp,
  IUserLogin,
  IUserAuthority,
  IUseDetailedInfo,
} from '@/interfaces/user';

export const createUser = async (user: IUserSignUp): Promise<AxiosResponse<IUser>> =>
  apiClient.post('/users/signup', user);

export const addAuthorityToUser = async (
  Authority: IUserAuthority
): Promise<AxiosResponse<string>> => apiClient.post('/users/add-authority', Authority);

export const getAllUsers = async (): Promise<AxiosResponse<IUser>> => apiClient.get('/users');

export const getUserById = async (id: number): Promise<AxiosResponse<IUser>> =>
  apiClient.get(`/users/${id}`);

export const updateUserById = async (
  id: number,
  userPut: IUserSignUp
): Promise<AxiosResponse<IUser>> => apiClient.put(`/users/${id}`, userPut);

export const deleteUser = async (id: number): Promise<void> => apiClient.delete(`/users/${id}`);

export const login = async (user: IUserLogin): Promise<AxiosResponse<undefined>> =>
  apiClient.post('/users/login', user);

export const getEmailExists = (email: string): Promise<AxiosResponse<boolean>> =>
  apiClient.get(`/users/verification?email=${email}`);

export const getUserInfo = (): Promise<AxiosResponse<IUseDetailedInfo>> =>
  apiClient.get(`/users/info`);

export const updateUserVerify = async (token: string): Promise<AxiosResponse<string>> =>
  apiClient.put(`/users/verify-account/${token}`);
