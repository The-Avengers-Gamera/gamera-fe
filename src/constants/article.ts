export enum ArticleType {
  NEWS = 'news',
  REVIEWS = 'reviews',
}

export enum Platform {
  All = 'all',
  PlayStation = 'playstation',
  Nintendo = 'nintendo',
  Xbox = 'xbox',
  PC = 'pc',
}

export enum ReviewSort {
  CREATED_TIME = 'createdTime',
  TITLE = 'title',
  // TODO: temporarily disable this sort option, waiting for backend to implement
  // SCORES = 'game.scores',
}

export enum ReviewOrder {
  ASC = 'asc',
  DESC = 'desc',
}
