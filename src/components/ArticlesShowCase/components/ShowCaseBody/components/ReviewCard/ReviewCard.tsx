import styled from 'styled-components';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import { IArticleCard } from '@/interfaces/article';

const OuterContainer = styled.div`
  .news-card {
    padding: 25px 0;
    display: flex;
    cursor: pointer;
    font-family: Montserrat;
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
      object-fit: cover;
      border-radius: 10px;
      transition: 0.3s;
    }
    .right {
      margin-left: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        color: white;
        font-size: 18px;
        font-weight: bold;
        font-family: Montserrat;
      }
      .icon {
        margin-right: 7px;
      }
      .game-author-like-comment {
        display: flex;
        //justify-content: space-between;
        padding-right: 80px;
        .game {
          font-weight: bold;
          display: flex;
          align-items: center;
          margin-right: 20px;
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
    border: 0px;
    border-top: 2px solid #3d3d3d;
  }
`;
interface IReviewCardPros {
  article: IArticleCard;
}

const ReviewCard = ({
  article: { coverImgUrl, title, date, description, author, likeNum: likeCount, commentNum, game },
}: IReviewCardPros) => {
  return (
    <OuterContainer>
      <div className="news-card">
        <img
          src={coverImgUrl}
          alt="news cover"
          className="left"
        />
        <div className="right">
          <h3 className="title">{title}</h3>
          <p className="date-description">
            {date} - {description}
          </p>
          {game ? (
            <div className="game-author-like-comment">
              <div className="game">
                <VideogameAssetIcon className="icon" />
                {game.name}
              </div>
              <div className="author-like-comment">
                <span className="author">
                  <PersonIcon className="icon" /> {author.name}
                </span>
                <span className="like-count">
                  <FavoriteIcon className="icon" /> {likeCount}
                </span>
                <span className="comment-count">
                  <ForumIcon className="icon" />
                  {commentNum}
                </span>
              </div>
            </div>
          ) : (
            <div className="author-like-comment">
              <span className="author">
                <PersonIcon className="icon" /> {author.name}
              </span>
              <span className="like-count">
                <FavoriteIcon className="icon" /> {likeCount}
              </span>
              <span className="comment-count">
                <ForumIcon className="icon" />
                {commentNum}
              </span>
            </div>
          )}
        </div>
      </div>
      <hr />
    </OuterContainer>
  );
};

export default ReviewCard;
