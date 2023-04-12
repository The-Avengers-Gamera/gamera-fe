import { EArticleType } from '@/constants/article';
import { IGame } from './game';
import { IUser } from './user';
import { ITagSlim } from './tag';

export interface IArticle {
  id: number;
  game?: IGame;
  author?: IUser;
  coverImgUrl: string;
  tagList: ITagSlim[];
  title: string;
  text: string;
  type: EArticleType;
  createdTime: string;
  updatedTime: string;
  commentList: IComment[];
  likeNum: number;
  commentNum: number;
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
  likeNum: number;
  commentNum: number;
  date?: string;
  createdTime: string;
}
