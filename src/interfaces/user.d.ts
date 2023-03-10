import { IAuthority } from './authority';

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
  authorities: Set<IAuthority>;
  email: string;
}

export interface IUserSlim {
  id: number;
  name: string;
}
