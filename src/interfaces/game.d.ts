import { IGenre } from './genre';

export interface IGame {
  id: number;
  name: string;
  platform: string;
  releaseDate: string;
  country: sting;
  scores: number;
  developers: string;
  publishers: string;
  introduction: string;
  description: string;
  createdTime: string;
  updatedTime: string;
  imgUrl: string;
  genreList: Array<IGenre>;
}

export interface IGamePost extends Omit<IGame, 'createdTime' | 'updatedTime'> {}

export interface IGamePut extends Omit<IGame, 'createdTime'> {}

export interface ICurrentGame {
  name: string;
  genre: string;
  platform: string[];
  img: string;
}

export interface IGameCard {
  id: number;
  imgUrl: string;
  name: string;
  scores: number;
  platform: string[];
  publishers: string;
}
