import { EArticleType } from '@/constants/article';
import { IGame } from './game';
import { IUser } from './user';

export interface IArticle {
  id: number;
  game?: IGame;
  user?: IUser;
  coverImgUrl: string;
  title: string;
  text: string;
  type: EArticleType;
  createdTime: string;
  updatedTime: string;
}

export interface IArticlePut {
  title: string;
  text: string;
}

export interface IArticleMini extends Omit<IArticle, 'game' | 'user'> {}

export interface IArticlePost extends Omit<IArticle, 'id' | 'createdTime' | 'updatedTime'> {}

export interface IArticleCard {
  id: number;
  coverImgUrl: string;
  title: string;
  description: string;
  author: {
    name: string;
  };
  game?: {
    id: string;
    name: string;
  };
  likeCount: number;
  commentCount: number;
  date?: string;
  createdTime: string;
}
