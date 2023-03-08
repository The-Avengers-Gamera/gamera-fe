import { Button, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import FilterSelector from './SortSelector/SortSelector';

const Container = styled.div`
  width: 80%;

  h3 {
    margin-bottom: 15px;
    color: #f5f8f7;
    font-size: 24px;
    span {
      margin-left: 10px;
      font-size: 16px;
      color: ${({ theme }) => theme.color.primary};
      font-weight: bold;
    }
  }
  hr {
    display: block;
    border: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 1;
    margin-bottom: 20px;
  }
  .post-comment-input {
    width: 60%;
    margin-bottom: 20px;
    .username {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 20px;
    }
    .second-row {
      margin-bottom: 15px;
      display: flex;
      .avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
      .comment-input {
        margin-left: 25px;
        flex: 1;
      }
    }
    .send-btn-container {
      display: flex;
      flex-direction: row-reverse;
      .send-btn {
        right: 0;
        font-weight: bold;
      }
    }
  }
  .filter {
    font-weight: bold;
    display: flex;
    align-items: center;
    p {
      margin-right: 10px;
    }
  }
`;

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
  const currentUser = {
    username: 'Alice.Bob',
    avatar:
      'https://oystatic.ignimgs.com/src/core/img/social/avatars/male2.jpg?crop=1%3A1&width=36&dpr=2',
  };

  return (
    <Container>
      <h3>
        Conversation <span>{commentList.length} Comments</span>
      </h3>
      <hr />
      <div className="post-comment-input">
        <p className="username">{currentUser.username}</p>
        <div className="second-row">
          <img
            src={currentUser.avatar}
            alt="avatar"
            className="avatar"
          />
          <TextField
            id="outlined-basic"
            label="What do you think?"
            variant="filled"
            multiline
            maxRows={40}
            className="comment-input"
          />
        </div>
        <div className="send-btn-container">
          <Button
            className="send-btn"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </div>
      <div className="filter">
        <p>Sort by</p>
        <FilterSelector />
      </div>
    </Container>
  );
};

export default Comments;
