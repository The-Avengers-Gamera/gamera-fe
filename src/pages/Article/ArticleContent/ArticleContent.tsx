import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ArticleMainContent from './ArticleMainContent/ArticleMainContent';
import { IArticle } from '../../../interfaces/article';
import { nowToCreated } from '../../../utils/time';

const Container = styled.div`
  margin-bottom: 0px;
  .game-list-top {
    display: flex;
    margin-bottom: 35px;
    li {
      margin-right: 25px;
      text-decoration: underline;
      color: ${({ theme }) => theme.color.primary};
      font-weight: bold;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      cursor: pointer;
    }
  }
  h1 {
    margin-bottom: 25px;
  }
  h2 {
    color: #d3ddd9;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  .article-info {
    width: 95%;
    display: flex;
    color: #bbc4c4;
    font-weight: bold;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.color.primary};
    .author {
      display: flex;
      img {
        width: 27px;
        min-width: 27px;
        max-height: 27px;
        border-radius: 50%;
        margin-right: 10px;
      }
      a {
        text-decoration: underline;
      }
    }

    .date {
      margin-left: 25px;
      border-left: 2px solid #3b414d;
      padding-left: 25px;
    }
  }

  hr {
    width: 80%;
    display: block;
    border: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 1;
    margin-bottom: 50px;
  }

  h3 {
    color: #f5f8f7;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .in-this-article {
    margin-bottom: 45px;
    .game-list {
      display: flex;
      background-color: #232530;
      padding: 35px;
      padding-bottom: 25px;
      border-radius: 5px;
      width: 90%;
      li {
        width: 160px;
        margin-right: 40px;
        img {
          height: 160px;
          width: 160px;
          margin-bottom: 5px;
          border-radius: 5px;
        }
        p {
          font-size: 12px;
          font-weight: bold;
          color: white;
        }
      }
    }
  }

  .topics {
    margin-bottom: 50px;
    h3 {
      margin-bottom: 10px;
    }
    .tag-list {
      display: flex;
      li {
        color: black;
        font-weight: bold;
        background-color: ${({ theme }) => theme.color.primary};
        height: 33px;
        padding: 0 10px;
        margin-right: 20px;
        border-radius: 3px;
        line-height: 33px;
        cursor: pointer;
      }
    }
  }
  .like-count {
    h3 {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      .like-article-btn {
        margin-left: 10px;
        background-color: transparent;
        color: ${({ theme }) => theme.color.primary};
        border: 0px;
        cursor: pointer;
        .like-icon {
          font-size: 30px;
        }
      }
      span {
        font-size: 20px;
        margin-left: 10px;
      }
    }
  }
`;

interface Props {
  articleContent: IArticle;
}

const ArticleContent = ({ articleContent }: Props) => {
  const { title, author, updatedTime, createdTime, text, game, tagList, likeNum } = articleContent;

  // TODO: initial value should be based on user object
  const [likedThisArticle, setLikedThisArticle] = useState<boolean>(false);

  const handleLikeArticleClick = () => {
    setLikedThisArticle(!likedThisArticle);
  };

  return (
    <Container>
      <ul className="game-list-top">
        <li>{game?.name}</li>
      </ul>
      <h1>{title}</h1>
      {/* <h2>{subtitle}</h2> */}
      <div className="article-info">
        <div className="author">
          <img
            src={author?.profileImgUrl || 'https://i.imgur.com/0y0t0Xy.png'} // TODO: backend needs to add the user image
            alt="author-avatar"
          />
          <p>
            BY <Link to={`/user/${author?.id}`}>{author?.name}</Link>
          </p>
        </div>
        <div className="date">UPDATED: {nowToCreated(updatedTime)}</div>
        <div className="date">POSTED: {nowToCreated(createdTime)}</div>
      </div>
      <ArticleMainContent mainContent={text} />
      <hr />
      {
        // if game is not null, show the game info
        game && (
          <div className="in-this-article">
            <h3>In This Article</h3>
            <ul className="game-list">
              <li key={game?.id}>
                <img
                  src={game?.imgUrl || 'https://i.imgur.com/0y0t0Xy.png'} // TODO: backend needs to add the game image url
                  alt="game-cover"
                />
                <p>{game?.name}</p>
              </li>
            </ul>
          </div>
        )
      }

      {tagList?.length > 0 && (
        <div className="topics">
          <h3>Topics</h3>
          <ul className="tag-list">
            {tagList.map((tag) => (
              <li>{tag.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="like-count">
        <h3>
          Like this article{' '}
          <button
            className="like-article-btn"
            type="button"
            onClick={handleLikeArticleClick}
          >
            {likedThisArticle ? (
              <ThumbUpAltIcon className="like-icon" />
            ) : (
              <ThumbUpOffAltIcon className="like-icon" />
            )}
          </button>
          <span>{likeNum}</span>
        </h3>
      </div>
    </Container>
  );
};

export default ArticleContent;
