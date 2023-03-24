export interface ICommentItem {
  id: number;
  author: {
    id: number;
    avatar: string;
    username: string;
  };
  postTime: string;
  like: number;
  content: string;
  childCommentList: ICommentItem[] | [];
}
