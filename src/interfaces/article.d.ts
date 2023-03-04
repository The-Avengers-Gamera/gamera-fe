import { EArticleType } from '@/constants/article';
import { IGame } from './game';
import { IUser } from './user';

export interface IArticle {
  id: number;
  game: IGame;
  user: IUser;
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

// used to confine the format of article obj that is used in ArticleShowCase in Review and News page
export interface IArticleCard {
  coverImgUrl: string;
  title: string;
  date: string; // format: 'x days ago'
  description: string; // to be added into database
  author: {
    name: string;
  };
  game?: {
    id: string;
    name: string;
  };
  likeCount: number; // computed by backend
  commentCount: number; // computed by backend
}
