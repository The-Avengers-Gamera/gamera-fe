import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';

const Result = styled.div`
  font-family: 'Alumni Sans';
  border-radius: 2px;
  padding-top: 8px;
`;

// TODO: implement real data
const fakeDate = [
  {
    id: 1,
    title: 'title1',
    date: '2021-12-12',
  },
  {
    id: 2,
    title: 'title2',
    date: '2021-12-12',
  },
  {
    id: 3,
    title: 'title1',
    date: '2021-12-12',
  },
  {
    id: 4,
    title: 'title2',
    date: '2021-12-12',
  },
];

interface ResultDropDownProps {
  onModalClose: () => void;
}
const ResultDropDown = ({ onModalClose }: ResultDropDownProps) => {
  return (
    <Result>
      {fakeDate.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          onModalClose={onModalClose}
        />
      ))}
    </Result>
  );
};

export default ResultDropDown;
