import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  id: number;
  title: string;
  date: string;
  onModalClose: () => void;
}
const ListItem = ({ id, title, date, onModalClose }: ListItemProps) => {
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
          <Img src="https://assets-prd.ignimgs.com/2022/12/29/framingreal-1672331744686.jpg?width=96&crop=1%3A1%2Csmart" />
          <Content isHoverCard={isHoverCard}>
            <h2>{title}</h2>
            <Date>{date}</Date>
          </Content>
        </Item>
      </Link>
      <Divider />
    </>
  );
};

export default ListItem;
