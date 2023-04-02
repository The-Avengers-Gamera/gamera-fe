import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import FilterSelector from './SortSelector/SortSelector';
import { IComment, ICommentPost } from '../../../interfaces/comment';
import { createComment } from '@/services/comment';
import useToast from '@/context/notificationToast';
import { ToastType } from '@/constants/notification';
import logo from '@/assets/images/logo.png';
import useAuth from '@/context/auth';
import useModal from '@/context/loginModal';

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

  .no-comment {
    margin-top: 70px;
    margin-bottom: 70px;
    font-size: 18px;
    color: #979797;
    font-weight: bold;
    font-style: italic;
    margin-left: 40px;
  }

  .comments {
    margin-top: 30px;
  }

  .no-login-comment-input {
    margin-top: 30px;
    button {
      background-color: transparent;
      border: 0;
      color: ${({ theme }) => theme.color.primary};
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
    }
    button:hover {
      text-decoration: underline;
    }
  }
`;

interface Props {
  commentList: IComment[] | [];
  articleId: number;
  setCommentList: (commentList: IComment[]) => void;
}

const Comments = ({ commentList, articleId, setCommentList }: Props) => {
  const { auth: currentUser } = useAuth();

  const [commentInput, setCommentInput] = useState<string>('');

  const { setToastIsOpen, setToastContent } = useToast();

  const { setModalIsOpen } = useModal();

  const postComment = async (comment: ICommentPost) => {
    try {
      const response = await createComment(comment);
      if (response) {
        setCommentList([response.data, ...commentList]);
      }
    } catch (error) {
      const errorMessage = error.response.data;
      setToastIsOpen(true);
      setToastContent({
        type: ToastType.ERROR,
        message: errorMessage,
        duration: 3000,
      });
      setCommentInput('');
    }
  };

  const handleSendCommentClick = () => {
    if (commentInput !== '') {
      const newComment: ICommentPost = {
        authorId: currentUser.id,
        text: commentInput,
        articleId,
      };
      postComment(newComment);
      // set the toast notification
      setToastIsOpen(true);
      setToastContent({
        type: ToastType.SUCCESS,
        message: 'Comment posted successfully',
        duration: 3000,
      });
    }
  };

  const [activeReplyInputCommentId, setActiveReplyInputCommentId] = useState<number | null>(null);

  return (
    <Container>
      <h3>
        Conversation <span>{commentList.length} Comments</span>
      </h3>
      <hr />
      {currentUser && (
        <div className="post-comment-input">
          <p className="username">{currentUser.name}</p>
          <div className="second-row">
            <div className="avatar-input">
              <img
                src={currentUser.avatar || 'https://i.pravatar.cc/300'}
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
        </div>
      )}
      {!currentUser && (
        <div className="no-login-comment-input">
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
      {commentList.length === 0 && <p className="no-comment">No comments yet</p>}
      {commentList.length > 0 && (
        <div className="filter">
          <p>Sort by</p>
          <FilterSelector />
        </div>
      )}
      <div className="comments">
        {commentList.map((comment) => (
          <CommentItem
            layer={0}
            key={comment.id}
            comment={comment}
            parent={null}
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
    </Container>
  );
};

export default Comments;
