export interface IPage<T> {
  data: T;
  totalItems: number;
  totalPages: number;
  currentPage: number;
}
