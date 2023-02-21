import styled from 'styled-components';
import ReviewCard from './components/ReviewCard';

const Container = styled.div`
  border: 1px solid #fff;
  width: 375px;
  height: 350px;
`;

const Top5Reviews = () => {
  return (
    <Container>
      {/* <div className="title"> Popular Reveiws</div> */}
      <img
        src=""
        alt="card index"
      />

      <ul className="listBody">
        <li>
          <ReviewCard
            title="one way"
            commentNum={36}
          />
        </li>
      </ul>
    </Container>
  );
};

export default Top5Reviews;
