import { Platform, ReviewSort, ReviewOrder } from '@/constants/article';
import { SortBarGenre } from '@/constants/dropdown';

type SearchGenre = Lowercase<SortBarGenre>;

export interface IArticleQuery {
  page: number;
  size: number;
  platform: Platform;
  genre: SearchGenre;
  sort?: ReviewSort;
  order?: ReviewOrder;
}

export interface ArticleESearchResult {
  id: string;
  gameName: string;
  authorName: string;
  coverImgUrl: string;
  title: string;
  subtitle: string;
  type: string;
  updatedTime: string;
}
