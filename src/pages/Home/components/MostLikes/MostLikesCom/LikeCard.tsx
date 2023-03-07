import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import React from 'react';
import styled from 'styled-components';
import { titleFont } from '@/pages/Home/utils/useFont';

const Container = styled.div`
  //width: 565px;
  position: relative;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  background-color: ${(cardBgColor) => cardBgColor.theme.color.bg_secondary};
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
  margin-left: 7.5px;
  margin-right: 7.5px;
  display: inline-block;
  width: 400px;

  & .Tile_container {

    & span {
      ${titleFont}  
      margin-left: 5px;

      font-size: 14px;
    }
  }
  & .Comment_container {
    margin-top: 20px;
    margin-left: 5px;
    & span {
      padding-left:7px;
      font-size: 14px;
  }
`;

const Like = styled.div`
  position: absolute;
  right: 10px;
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
