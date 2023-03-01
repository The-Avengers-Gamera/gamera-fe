import React from 'react';

interface CommentType {
  author: {
    id: number;
    avatar: string;
    username: string;
  };
  postTime: string;
  like: number;
  content: string;
  childCommentList: CommentType[] | [];
}

interface Props {
  commentList: CommentType[] | [];
}

const Comments = ({ commentList }: Props) => {
  return <div>Comments</div>;
};

export default Comments;
