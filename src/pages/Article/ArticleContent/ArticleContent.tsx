import React from 'react';
import styled from 'styled-components';
import ArticleMainContent from './ArticleMainContent/ArticleMainContent';

const Container = styled.div`
  margin-bottom: 70px;
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
`;

interface Props {
  articleContent: {
    title: string;
    subtitle: string;
    author: {
      id: number;
      name: string;
      avatar: string;
    };
    updateTime: string;
    postTime: string;
    mainContent: string;
    gameList: { id: number; name: string; cover: string }[] | [];
    tagList: { id: number; name: string }[] | [];
  };
}

const ArticleContent = ({ articleContent }: Props) => {
  return (
    <Container>
      <ul className="game-list-top">
        {articleContent.gameList.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
      <h1>{articleContent.title}</h1>
      <h2>{articleContent.subtitle}</h2>
      <div className="article-info">
        <div className="author">
          <img
            src={articleContent.author.avatar}
            alt="author-avatar"
          />
          <p>
            BY <a href="/user">{articleContent.author.name}</a>
          </p>
        </div>
        <div className="date">UPDATED: {articleContent.updateTime}</div>
        <div className="date">POSTED: {articleContent.postTime}</div>
      </div>
      <ArticleMainContent mainContent={articleContent.mainContent} />
      <hr />
      <div className="in-this-article">
        <h3>In This Article</h3>
        <ul className="game-list">
          {articleContent.gameList.map((game) => (
            <li key={game.id}>
              <img
                src={game.cover}
                alt="game-cover"
              />
              <p>{game.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="topics">
        <h3>Topics</h3>
        <ul className="tag-list">
          {articleContent.tagList.map((tag) => (
            <li>{tag.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ArticleContent;
