type SearchPlatform = Lowercase<Platform>;

export interface ISearchArticle {
  page: number;
  size: number;
  sort?: string;
  platform?: SearchPlatform;
  genre?: string;
}
