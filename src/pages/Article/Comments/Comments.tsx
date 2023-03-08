import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ICommentItem } from '../comment';
import CommentItem from './CommentItem';
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
    height: 2px;
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
    .avatar-input {
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

  .comments {
    margin-top: 30px;
  }
`;

interface Props {
  commentList: ICommentItem[] | [];
}

const Comments = ({ commentList }: Props) => {
  const currentUser = {
    username: 'Alice.Bob',
    avatar:
      'https://oystatic.ignimgs.com/src/core/img/social/avatars/male2.jpg?crop=1%3A1&width=36&dpr=2',
  };

  const [activeReplyInputCommentId, setActiveReplyInputCommentId] = useState<number | null>(null);

  return (
    <Container>
      <h3>
        Conversation <span>{commentList.length} Comments</span>
      </h3>
      <hr />
      <div className="post-comment-input">
        <p className="username">{currentUser.username}</p>
        <div className="second-row">
          <div className="avatar-input">
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
      </div>
      <div className="filter">
        <p>Sort by</p>
        <FilterSelector />
      </div>
      <div className="comments">
        {commentList.map((comment) => (
          <CommentItem
            layer={0}
            key={comment.id}
            comment={comment}
            parentAuthorName={null}
            activeReplyState={{
              activeReplyInputCommentId,
              setActiveReplyInputCommentId,
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Comments;
