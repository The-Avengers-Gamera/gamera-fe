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
