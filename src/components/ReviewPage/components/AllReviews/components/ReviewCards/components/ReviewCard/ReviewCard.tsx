import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 170px;
  font-family: 'Roboto';
  display: flex;
  //align-items: center;
`;

const Cover = styled.div`
  height: 145px;
  width: 245px;
  min-width: 245px;
  display: flex;
  justify-content: center;
  //align-items: center;

  & img {
    object-fit: cover;
    height: 100%;
    border-radius: 10px;
  }
`;

const ReviewContent = styled.div`
  height: 141px;
  width: 100%;
  margin-left: 28px;
  & .Title_container {
    & span {
      font-size: 18px;
      font-weight: 700;
    }
  }
  & .DayAndOverview_container {
    margin-top: 20px;
    & span {
      font-size: 16px;
      font-weight: 400;
    }
  }
  & .Others_container {
    margin-top: 20px;
    width: 575px;
    display: flex;
    & .Game_container {
      width: 242px;
      display: flex;
      & .Game_cover {
        height: 100%;
      }
      & span {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 700;
      }
    }
    & .Author_container {
      margin-left: 30px;
      & span {
        margin-left: 5px;
        font-size: 16px;
        font-weight: 700;
      }
    }
    & .Like_container {
      margin-left: 30px;
      & span {
        margin-left: 5px;
        font-size: 16px;
        font-weight: 700;
      }
    }
    & .Comment_container {
      margin-left: 30px;
      & span {
        margin-left: 5px;
        font-size: 16px;
        font-weight: 700;
      }
    }
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
  color: ${({ theme }) => theme.color.primary};
  width: 20px;
  height: 15px;
`;

const LikeIcon = styled(FavoriteRoundedIcon)`
  color: red;
  width: 16.67px;
  height: 15.42px;
`;

const GameIcon = styled(VideogameAssetRoundedIcon)`
  color: ${({ theme }) => theme.color.primary};
  width: 25.65px;
  height: 20px;
`;

const AuthorIcon = styled(PersonRoundedIcon)`
  color: ${({ theme }) => theme.color.primary};
  width: 25.65px;
  height: 17.5px;
`;

type ReviewCardProps = {
  coverUrl: string;
  title: string;
  daysAndOverview: string;
  game: string;
  author: string;
  commNum: string;
  likeNum: string;
};

const ReviewCard = ({
  coverUrl,
  title,
  daysAndOverview,
  game,
  author,
  commNum,
  likeNum,
}: ReviewCardProps) => {
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
      <ReviewContent>
        <div className="Title_container">
          <span>{title}</span>
        </div>
        <div className="DayAndOverview_container">
          <span>{daysAndOverview}</span>
        </div>
        <div className="Others_container">
          <div className="Game_container">
            <div className="Game_cover">
              <GameIcon />
            </div>
            <span>{game}</span>
          </div>
          <div className="Author_container">
            <AuthorIcon />
            <span>{author}</span>
          </div>
          <div className="Like_container">
            <LikeIcon />
            <span>{likeNum}</span>
          </div>
          <div className="Comment_container">
            <CommentIcon />
            <span>{commNum}</span>
          </div>
        </div>
      </ReviewContent>
    </Container>
  );
};
export default ReviewCard;
