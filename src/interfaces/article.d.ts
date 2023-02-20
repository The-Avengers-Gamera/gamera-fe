import { EArticleType } from '@/constants/article';

export interface IArticle {
  id: number;
  coverImgUrl: string;
  title: string;
  text: string;
  type: EArticleType;
  createdTime: string;
  updatedTime: string;
}

export interface IArticlePost extends Omit<IArticle, 'id' | 'createdTime' | 'updatedTime'> {}
