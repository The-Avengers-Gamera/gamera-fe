import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  //width: 565px;
  height: 65px;
  font-family: Poppins;
  display: flex;
  align-items: center;
`;

const Cover = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 7.5px;
  display: inline-block;

  & img {
    width: 50px;
    height: 100%;
  }
`;

const ArticleOverview = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-left: 7.5px;
  margin-right: 7.5px;
  display: inline-block;
  width: 400px;
  & .Tile_container {
    & span {
      margin-left: 5px;

      font-size: 14px;
      font-weight: bold;
    }
  }
  & .Comment_container {
    & span {
      margin-left: 5px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  display: inline-block;
  justify-content: center;
  align-items: center;

  & .LikeNum_container {
    display: flex;
    align-items: center;
    & span {
      margin-left: 5px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

const CommentIcon = styled(ChatRoundedIcon)`
  width: 12.83px;
  height: 11.96px;
`;

const LikeIcon = styled(FavoriteRoundedIcon)`
  color: red;
  width: 13.33px;
  height: 12.33px;
`;

type LikeCardProps = {
  coverUrl: string;
  title: string;
  commNum: string;
  likeNum: string;
};

const LikeCard = ({ coverUrl, title, commNum, likeNum }: LikeCardProps) => {
  return (
    <Container>
      <Cover>
        {/* fake href */}
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
          <img
            src={coverUrl}
            alt=""
          />
        </a>
      </Cover>
      <ArticleOverview>
        <div className="Tile_container">
          <span>{title}</span>
        </div>
        <div className="Comment_container">
          <CommentIcon />
          <span>{commNum}</span>
        </div>
      </ArticleOverview>
      <Like>
        <div className="LikeNum_container">
          <LikeIcon />
          <span>{likeNum}</span>
        </div>
      </Like>
    </Container>
  );
};

export default LikeCard;
