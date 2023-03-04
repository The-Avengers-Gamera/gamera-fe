import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IComment, ICommentPost, ICommentPut } from '@/interfaces/comment';

export const getCommentsByArticleId = async (
  id: number
): Promise<AxiosResponse<Map<string, object>>> => apiClient.get(`/comments/articles/${id}`);

export const createComment = async (commentPost: ICommentPost): Promise<AxiosResponse<IComment>> =>
  apiClient.post('/comments', commentPost);

export const getCommentById = async (id: number): Promise<AxiosResponse<Map<string, object>>> =>
  apiClient.get(`/comments/${id}`);

export const updateComment = async (
  id: number,
  commentPut: ICommentPut
): Promise<AxiosResponse<IComment>> => apiClient.put(`/comments/${id}`, commentPut);

export const deleteComment = async (id: number): Promise<void> =>
  apiClient.delete(`/comments/${id}`);
