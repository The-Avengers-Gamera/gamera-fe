import styled from 'styled-components';
import Top5Reviews from './components/Top5Reviews';
import TopReviewCover from './components/TopReviewCover';

const GeneralContainer = styled.div`
  background-color: #000000;
  height: 575px;
  padding: 0px 85px 95px;
  position: relative;
  clip-path: polygon(0% 0%, 35% 0%, 37% 5%, 63% 5%, 65% 0%, 100% 0%, 100% 100%, 0% 100%);

  & .titleContainer {
    height: 95px;
    position: relative;

    & h2 {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 450px;

      font-family: Poppins;
      font-size: 28px;
      font-weight: 600;
      text-transform: capitalize;

      text-align: center;

      border-bottom: 1px solid #5d5d5d; // TODO: manage the color using theme instead
    }
  }

  & .bodyContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const PopularReviews = () => {
  return (
    <GeneralContainer>
      <div className="titleContainer">
        <h2>Popular Reviews</h2>
      </div>

      <div className="bodyContainer">
        <TopReviewCover />
        <Top5Reviews />
      </div>
    </GeneralContainer>
  );
};

export default PopularReviews;
