import React from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Button, TextField } from '@mui/material';
import { ICommentItem } from '../../comment';

const childCommentIndent = '80px';
const Container = styled.div`
  hr {
    margin-bottom: 40px;
  }
  .this-comment {
    display: flex;
    .comment-avatar {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      margin-right: 30px;
    }

    .comment-right {
      margin-bottom: 25px;
      .username {
        font-weight: bold;
        font-size: 18px;
        color: ${({ theme }) => theme.color.primary};
        margin-bottom: 5px;
      }
      .post-time {
        color: #7b7b7b;
      }

      .comment-text {
        margin: 10px 0 15px;
      }
      .operation {
        display: flex;
        button {
          display: block;
          background-color: transparent;
          border: 0;
          color: ${({ theme }) => theme.color.primary};
          cursor: pointer;
        }
        .reply-btn {
          font-size: 18px;
          margin-right: 20px;
          padding: 5px 10px;
          border-radius: 3px;
        }
        .reply-btn:hover {
          background-color: #2c840047;
        }

        .like-btn {
          display: flex;
          align-items: center;
          font-size: 18px;
          span {
            margin-left: 5px;
          }
        }
      }

      .reply-input-box {
        width: 60%;
        .avatar-input {
          margin-top: 20px;
          display: flex;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 20px;
          }
          .comment-input {
            flex: 1;
          }
        }
        .send-btn-container {
          display: flex;
          flex-direction: row-reverse;
          margin-top: 10px;
          .send-btn {
            right: 0;
            font-weight: bold;
          }
        }
      }
    }
  }

  &.second-layer,
  &.third-layer,
  &.fourth-layer {
    padding-left: ${childCommentIndent};
    .comment-avatar {
      width: 40px;
      height: 40px;
    }
  }
`;

interface Props {
  comment: ICommentItem;
  layer: number;
  parentAuthorName: string | null;
  activeReplyState: {
    activeReplyInputCommentId: number | null;
    setActiveReplyInputCommentId: (value: React.SetStateAction<number | null>) => void;
  };
}

const LayerClass = ['first-layer', 'second-layer', 'third-layer', 'fourth-layer', ''];

const CommentItem = ({ comment, layer = 0, parentAuthorName, activeReplyState }: Props) => {
  const { id, author, postTime, like, content, childCommentList } = comment;
  const { activeReplyInputCommentId, setActiveReplyInputCommentId } = activeReplyState;

  const layerClass = LayerClass[layer];
  // the user that is using
  const currentUser = {
    avatar:
      'https://oystatic.ignimgs.com/src/core/img/social/avatars/male2.jpg?crop=1%3A1&width=36&dpr=2',
  };

  return (
    <Container className={layerClass}>
      <div className="this-comment">
        <img
          className="comment-avatar"
          src={author.avatar}
          alt="avatar"
        />
        <div className="comment-right">
          <p className="username">{author.username}</p>
          <p className="post-time">
            {parentAuthorName ? `reply to ${parentAuthorName} - ` : ''}
            {postTime}
          </p>
          <p className="comment-text">{content}</p>
          <div className="operation">
            <button
              className="reply-btn"
              type="button"
            >
              Reply
            </button>
            <button
              className="like-btn"
              type="button"
            >
              <ThumbUpOffAltIcon />
              <span>{like}</span>
            </button>
          </div>
          <div className="reply-input-box">
            <div className="avatar-input">
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="avatar"
              />
              <TextField
                id="outlined-basic"
                label={`Reply to ${author.username}...`}
                variant="filled"
                multiline
                maxRows={10}
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
      </div>

      {childCommentList.map((childComment) => (
        <CommentItem
          key={childComment.id}
          comment={childComment}
          layer={layer + 1 > 4 ? 4 : layer + 1}
          parentAuthorName={layer + 1 >= 4 ? author.username : null}
          activeReplyState={{
            activeReplyInputCommentId,
            setActiveReplyInputCommentId,
          }}
        />
      ))}

      {layer === 0 ? <hr /> : null}
    </Container>
  );
};

export default CommentItem;
