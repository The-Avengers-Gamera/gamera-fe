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
