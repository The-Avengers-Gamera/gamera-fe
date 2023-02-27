import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const OuterContainer = styled.div`
  .news-card {
    padding: 25px 0;
    display: flex;
    cursor: pointer;

    &:hover {
      .title {
        text-decoration: underline;
      }

      .left {
        filter: brightness(85%);
      }
    }

    .left {
      width: 245px;
      height: 145px;
      border-radius: 10px;
      transition: 0.3s;
    }

    .right {
      margin-left: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-size: 18px;
      }

      .icon {
        margin-right: 7px;
      }

      .game-author-like-comment {
        display: flex;
        justify-content: space-between;
        padding-right: 80px;
        .game {
          font-weight: bold;
          display: flex;
          align-items: center;
          .icon {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }

      .author-like-comment {
        display: flex;

        span {
          display: flex;
          justify-content: center;
          margin-right: 20px;
          font-weight: bolder;
        }

        .author {
          text-transform: uppercase;
          .icon {
            color: ${({ theme }) => theme.color.primary};
          }
        }

        .like-count .icon {
          color: #e70000;
        }

        .comment-count .icon {
          color: ${({ theme }) => theme.color.primary};
        }
      }
    }
  }
  hr {
    border: 0;
    border-top: 2px solid #3d3d3d;
  }
`;

interface Props {
  news: {
    coverUrl: string;
    title: string;
    date: string;
    subtitle: string;
    author: string;
    likeCount: number;
    commentCount: number;
    game?: {
      id: string;
      name: string;
    };
  };
}

const LatestNewsItem = ({ news }: Props) => {
  return (
    <OuterContainer>
      <div className="news-card">
        <img
          src={news.coverUrl}
          alt="news cover"
          className="left"
        />
        <div className="right">
          <h3 className="title">{news.title}</h3>
          <p className="date-subtitle">
            {news.date} - {news.subtitle}
          </p>
          {news.game ? (
            <div className="game-author-like-comment">
              <div className="game">
                <VideogameAssetIcon className="icon" />
                {news.game?.name}
              </div>
              <div className="author-like-comment">
                <span className="author">
                  <PersonIcon className="icon" /> {news.author}
                </span>
                <span className="like-count">
                  <FavoriteIcon className="icon" /> {news.likeCount}
                </span>
                <span className="comment-count">
                  <ForumIcon className="icon" />
                  {news.commentCount}
                </span>
              </div>
            </div>
          ) : (
            <div className="author-like-comment">
              <span className="author">
                <PersonIcon className="icon" /> {news.author}
              </span>
              <span className="like-count">
                <FavoriteIcon className="icon" /> {news.likeCount}
              </span>
              <span className="comment-count">
                <ForumIcon className="icon" />
                {news.commentCount}
              </span>
            </div>
          )}
        </div>
      </div>
      <hr />
    </OuterContainer>
  );
};

export default LatestNewsItem;
