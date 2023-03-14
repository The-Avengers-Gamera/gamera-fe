import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Button, TextField } from '@mui/material';
import { IComment } from '@/interfaces/comment';

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
        align-items: baseline;
        button {
          display: block;
          background-color: transparent;
          border: 0;
          color: ${({ theme }) => theme.color.primary};
          cursor: pointer;
        }
        .reply-btn {
          font-size: 18px;
          margin-right: 15px;
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

        .show-more-btn {
          color: gray;
          font-size: 16px;
        }
      }

      .reply-input-box {
        &.active {
          display: block;
        }
        display: none;
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

  .child-container {
    display: none;
    &.active {
      display: block;
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
  comment: IComment;
  layer: number;
  parentAuthorName: string | null;
  activeReplyState: {
    activeReplyInputCommentId: number | null;
    setActiveReplyInputCommentId: (value: React.SetStateAction<number | null>) => void;
  };
}

const LayerClass = ['first-layer', 'second-layer', 'third-layer', 'fourth-layer', ''];

const CommentItem = ({ comment, layer = 0, parentAuthorName, activeReplyState }: Props) => {
  const { id, user, updatedTime, text, childComment } = comment;
  const { activeReplyInputCommentId, setActiveReplyInputCommentId } = activeReplyState;
  const [replyInputShown, setReplyInputShown] = useState<boolean>(false);
  const [childCommentsShown, setChildCommentsShown] = useState<boolean>(false);

  const layerClass = LayerClass[layer];
  // the user that is using
  const currentUser = {
    avatar:
      'https://oystatic.ignimgs.com/src/core/img/social/avatars/male2.jpg?crop=1%3A1&width=36&dpr=2',
  };

  // TODO: add the backend user avatar
  user.profileImgUrl = user.profileImgUrl || currentUser.avatar;

  useEffect(() => {
    if (activeReplyInputCommentId === id) {
      setReplyInputShown(true);
    } else {
      setReplyInputShown(false);
    }
  }, [activeReplyInputCommentId]);

  const handleReplyClick = () => {
    if (replyInputShown) {
      setActiveReplyInputCommentId(null);
    } else {
      setActiveReplyInputCommentId(id);
    }
    setReplyInputShown(!replyInputShown);
  };

  const handleShowChildClick = () => {
    setChildCommentsShown(!childCommentsShown);
  };

  return (
    <Container className={layerClass}>
      <div className="this-comment">
        <img
          className="comment-avatar"
          src={user.profileImgUrl}
          alt="avatar"
        />
        <div className="comment-right">
          <p className="username">{user.name}</p>
          <p className="post-time">
            {parentAuthorName ? `reply to ${parentAuthorName} - ` : ''}
            {updatedTime}
          </p>
          <p className="comment-text">{text}</p>
          <div className="operation">
            <button
              className="reply-btn"
              type="button"
              onClick={handleReplyClick}
            >
              Reply
            </button>
            {/* <button
              className="like-btn"
              type="button"
            >
              <ThumbUpOffAltIcon />
              <span>{like}</span>
            </button> */}
            {childComment?.length === 0 ? null : (
              <button
                type="button"
                className="show-more-btn"
                onClick={handleShowChildClick}
              >
                {!childCommentsShown ? 'Show more replies...' : 'Show less replies'}
              </button>
            )}
          </div>
          <div
            className={`reply-input-box ${
              replyInputShown && activeReplyInputCommentId === id ? 'active' : ''
            }`}
          >
            <div className="avatar-input">
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="avatar"
              />
              <TextField
                id="outlined-basic"
                label={`Reply to ${user.name}...`}
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
      <div className={`child-container ${childCommentsShown ? 'active' : ''}`}>
        {childComment?.map((child: IComment) => (
          <CommentItem
            key={child.id}
            comment={child}
            layer={layer + 1 > 4 ? 4 : layer + 1}
            parentAuthorName={layer + 1 >= 4 ? user.name : null}
            activeReplyState={{
              activeReplyInputCommentId,
              setActiveReplyInputCommentId,
            }}
          />
        ))}
      </div>

      {layer === 0 ? <hr /> : null}
    </Container>
  );
};

export default CommentItem;
