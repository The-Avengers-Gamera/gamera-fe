export interface IUser {
  id: number;
  name: string;
  email: string;
  authorities: string[];
  profileImgUrl?: string;
  createdTime: string;
  updatedTime: string;
}

export interface IUserSignUp {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin extends Omit<IUserSignUp, 'password'> {}
