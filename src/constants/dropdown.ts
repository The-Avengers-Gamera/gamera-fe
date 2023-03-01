import { IDropdownFilterItem } from '@/interfaces/dropdown';
import { genreList } from './genre';

export const SORT_ITEMS: IDropdownFilterItem[] = [
  {
    name: 'Sort by Latest',
    value: 'latest',
  },
  {
    name: 'Sort by Oldest',
    value: 'oldest',
  },
  {
    name: 'Sort by Score',
    value: 'score',
  },
  {
    name: 'Sort by Title',
    value: 'title',
  },
];

export const GENRE_FILTER_ITEMS: IDropdownFilterItem[] = genreList.map((g) => ({
  name: g,
  value: g.toLowerCase(),
}));
