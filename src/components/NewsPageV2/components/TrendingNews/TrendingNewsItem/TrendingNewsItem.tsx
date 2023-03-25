import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import { IArticle } from '@/interfaces/article';

const Card = styled.div`
  width: 300px;
  flex-shrink: 0;
  cursor: pointer;

  .order {
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
  }

  .title {
    margin-top: 5px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    &:hover {
      text-decoration: underline;
    }
  }

  .comment-like {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    span {
      display: flex;
      font-weight: bold;
      flex-basis: 50%;
      .icon {
        margin-right: 8px;
      }
    }

    .like .icon {
      color: #e70000;
    }
    .comment .icon {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

interface Props {
  news: IArticle;
  order: string;
}

const TrendingNewsItem = ({ news, order }: Props) => {
  return (
    <Card>
      <div className="order">{order}</div>
      <div className="title">{news.title}</div>
      <div className="comment-like">
        <span className="comment">
          <ForumIcon className="icon" />
          {/* {news.commentCount} */}
        </span>
        <span className="like">
          <FavoriteIcon className="icon" />
          {/* {news.likeCount} */}
        </span>
      </div>
    </Card>
  );
};

export default TrendingNewsItem;
