import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(cardBgColor) => cardBgColor.theme.color.bg_secondary};
`;

const Cover = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 7.5px;
  display: inline-block;
  background-color: yellow;

  & img {
    width: 50px;
    height: 100%;
  }
`;

const ArticleOverview = styled.div`
  flex: 1;
  flex-shrink: 1;
  margin-left: 7.5px;
  margin-right: 7.5px;
  display: inline-block;
  width: 200px;

  .Tile_container {
    margin-left: 5px;
    font-size: 14px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .Comment_container {
    margin-top: 15px;
    margin-left: 5px;
    & span {
      padding-left: 7px;
      font-size: 12px;
    }
  }
`;

const Like = styled.div`
  /* position: absolute; */
  margin-right: 10px;
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
  commNum: number;
  likeNum: number;
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
        <div className="Tile_container">{title}</div>
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
