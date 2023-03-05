import { IUserSlim } from './user';

export interface ICommentSlim {
  id: number;
  text: string;
  CommentSlimDto: ICommentSlim;
  UserSlimGetDto: IUserSlim;
  createdTime: string;
  updatedTime: string;
}

export interface IComment extends Omit<ICommentSlim, 'CommentSlimDto' | 'UserSlimGetDto'> {
  parentComment: ICommentSlim;
  childComment: Array<ICommentSlim>;
}

export interface ICommentPost {
  text: string;
  parentId: number;
  articleId: number;
  authorId: number;
}

export interface ICommentPut {
  text: string;
}
