import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { IComment, ICommentPost } from '@/interfaces/comment';
import { createComment } from '@/services/comment';
import useAuth from '@/context/auth';
import useModal from '@/context/loginModal';
import useToast from '@/context/notificationToast/useToast';
import { ToastType } from '@/constants/notification';
import { nowToCreated } from '../../../../utils/time';

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
      width: 100%;
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

        &.no-login {
          .login-to-comment {
            margin-top: 10px;
            margin-left: 10px;
            font-style: italic;
            button {
              background-color: transparent;
              border: 0;
              color: ${({ theme }) => theme.color.primary};
              cursor: pointer;
              font-size: 18px;
              font-weight: bold;
            }
          }
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
  parent: IComment | null;
  activeReplyState: {
    activeReplyInputCommentId: number | null;
    setActiveReplyInputCommentId: (value: React.SetStateAction<number | null>) => void;
  };
  articleId: number;
  commentList: IComment[];
  setCommentList: (commentList: IComment[]) => void;
}

const LayerClass = ['first-layer', 'second-layer', 'third-layer', 'fourth-layer', ''];

const CommentItem = ({
  comment,
  layer = 0,
  parent,
  activeReplyState,
  articleId,
  commentList,
  setCommentList,
}: Props) => {
  const { id, user, updatedTime, text, childComment } = comment;
  const { activeReplyInputCommentId, setActiveReplyInputCommentId } = activeReplyState;
  const [replyInputShown, setReplyInputShown] = useState<boolean>(false);
  const [childCommentsShown, setChildCommentsShown] = useState<boolean>(false);
  const [commentInput, setCommentInput] = useState<string>('');
  const { auth } = useAuth();
  const { setModalIsOpen } = useModal();
  const { setToastIsOpen, setToastContent } = useToast();

  const { user: currentUser, isLogin } = auth;

  if (currentUser) {
    const dummyProfileImgUrl =
      'https://oystatic.ignimgs.com/src/core/img/social/avatars/male2.jpg?crop=1%3A1&width=36&dpr=2';
    currentUser.profileImgUrl = currentUser.profileImgUrl || dummyProfileImgUrl;
  }

  const layerClass = LayerClass[layer];

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

  const postComment = async (newComment: ICommentPost) => {
    try {
      const response = await createComment(newComment);
      if (response) {
        const respondedComment = response.data;
        // iterate the comment list to find the parent comment
        const newCommentList = commentList.map((commentElement) => {
          if (commentElement.id === respondedComment.parentComment?.id) {
            // eslint-disable-next-line no-param-reassign
            if (!commentElement.childComment) commentElement.childComment = [];
            // eslint-disable-next-line no-param-reassign
            commentElement.childComment = [...commentElement.childComment, respondedComment];
          }
          return commentElement;
        });
        setCommentList([...newCommentList]);
      }
    } catch (error) {
      const errorMessage = error.response.data;
      setToastIsOpen(true);
      setToastContent({
        type: ToastType.ERROR,
        message: errorMessage,
        duration: 3000,
      });
    }
    setCommentInput('');
  };

  const handleSendCommentClick = () => {
    if (commentInput !== '') {
      const newComment: ICommentPost = {
        authorId: currentUser.id,
        text: commentInput,
        articleId,
        parentId: parent?.id || id,
      };
      postComment(newComment);
      setCommentInput('');
      setToastIsOpen(true);
      setToastContent({
        type: ToastType.SUCCESS,
        message: 'Comment posted successfully',
        duration: 3000,
      });
    }
  };

  const handleShowChildClick = () => {
    setChildCommentsShown(!childCommentsShown);
  };

  return (
    <Container className={layerClass}>
      <div className="this-comment">
        <img
          className="comment-avatar"
          src={
            user.profileImgUrl ||
            'https://oystatic.ignimgs.com/src/core/img/social/avatars/male2.jpg?crop=1%3A1&width=36&dpr=2'
          }
          alt="avatar"
        />
        <div className="comment-right">
          <p className="username">{user.name}</p>
          <p className="post-time">
            {parent?.user.name ? `reply to ${parent?.user.name} - ` : ''}
            {nowToCreated(updatedTime)}
          </p>
          <p className="comment-text">{text}</p>
          {layer === 0 && (
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
          )}
          {isLogin && (
            <div
              className={`reply-input-box ${
                replyInputShown && activeReplyInputCommentId === id ? 'active' : ''
              }`}
            >
              <div className="avatar-input">
                <img
                  src={currentUser.profileImgUrl}
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
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                />
              </div>
              <div className="send-btn-container">
                <Button
                  className="send-btn"
                  variant="contained"
                  onClick={handleSendCommentClick}
                >
                  Send
                </Button>
              </div>
            </div>
          )}
          {/* Please login to comment */}
          {!isLogin && (
            <div
              className={`reply-input-box no-login ${
                replyInputShown && activeReplyInputCommentId === id ? 'active' : ''
              }`}
            >
              <p className="login-to-comment">
                Please{' '}
                <button
                  type="button"
                  onClick={() => setModalIsOpen(true)}
                >
                  login
                </button>{' '}
                to comment
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={`child-container ${childCommentsShown ? 'active' : ''}`}>
        {childComment?.map((child: IComment) => (
          <CommentItem
            key={child.id}
            comment={child}
            layer={layer + 1 > 4 ? 4 : layer + 1}
            parent={comment}
            articleId={articleId}
            activeReplyState={{
              activeReplyInputCommentId,
              setActiveReplyInputCommentId,
            }}
            setCommentList={setCommentList}
            commentList={commentList}
          />
        ))}
      </div>

      {layer === 0 ? <hr /> : null}
    </Container>
  );
};

export default CommentItem;
