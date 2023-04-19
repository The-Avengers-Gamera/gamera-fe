import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { convertToYYYYMMDD } from '@/utils/time';
import { ArticleESearchResult } from '@/interfaces/search';

const Item = styled.div`
  display: flex;
  margin-bottom: 4px;
  gap: 12px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

interface ContentProps {
  isHoverCard: boolean;
}
const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    text-decoration: ${({ isHoverCard }) => (isHoverCard ? 'underline' : 'none')};
  }
`;

const Date = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.text_secondary};
  margin: 12px 0;
`;

interface ListItemProps {
  article: ArticleESearchResult;
  onModalClose: () => void;
}
const ListItem = ({ article, onModalClose }: ListItemProps) => {
  const { id, title, coverImgUrl, updatedTime } = article;
  const [isHoverCard, setIsHoverCard] = useState<boolean>(false);

  const handleClick = () => {
    onModalClose();
  };

  return (
    <>
      <Link
        to={`/article/${id}`}
        onMouseEnter={() => setIsHoverCard(true)}
        onMouseLeave={() => setIsHoverCard(false)}
        onClick={handleClick}
      >
        <Item>
          <Img src={coverImgUrl} />
          <Content isHoverCard={isHoverCard}>
            <h2>{title}</h2>
            <Date>{convertToYYYYMMDD(updatedTime)}</Date>
          </Content>
        </Item>
      </Link>
      <Divider />
    </>
  );
};

export default ListItem;
