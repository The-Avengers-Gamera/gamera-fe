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
