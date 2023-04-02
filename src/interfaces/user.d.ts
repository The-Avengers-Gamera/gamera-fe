import { IAuthoritySlim } from './authority';
import { IArticleCard } from '@/interfaces/article';

export interface IUser {
  id: number;
  name: string;
  email: string;
  authorities: string[];
  profileImgUrl?: string;
  createdTime: string;
  updatedTime: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserSignUp extends IUserLogin {
  name: string;
}

export interface IUserAuthority extends Omit<IUserSignUp, 'password'> {}

export interface IUserInfo {
  id: number;
  authorities: IAuthoritySlim[];
  email: string;
}
export interface IUseDetailedInfo extends IUserInfo {
  name: string;
  updatedTime: string;
}
export interface IUserSlim {
  profileImgUrl?: string;
  id: number;
  name: string;
}

export interface AuthInfo {
  user: IUseDetailedInfo | undefined;
  isLogin: boolean;
  isEditor: boolean;
}

export interface IUserProfile {
  id: number;
  // authorities: Set<IAuthority>;
  name: string;
  likesCount: number;
  commentsCount: number;
  postsCount?: number;
  likesArticlesDto: Set<IArticleCard>;
  commentsArticlesDto: Set<IArticleCard>;
  postsArticlesDto?: Set<IArticleCard>;
  updatedTime: string;
}
