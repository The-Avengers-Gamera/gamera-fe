import styled from 'styled-components';

const Container = styled.div`
  background-color: #000000;
  height: 575px;

  position: relative;
  display: flex;
  align-items: center;

  & .topReviewCover_container {
    position: absolute;

    width: 755px;
    height: 390px;
    left: 85px;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & .top5ReviewList_container {
    position: absolute;

    left: 890px;
  }
`;

const PopularReviews = () => {
  return (
    <Container>
      <div className="topReviewCover_container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIT2c9adct3gQJZDB6mP74AuNn5wCCjJL6Q&usqp=CAU"
          alt="a review cover"
        />
      </div>
      <div className="top5ReviewList_container">
        <div className="title"> Popular Reveiws</div>
        <ul className="listBody">
          <li>card 1</li>
          <li>2</li>
        </ul>
      </div>
    </Container>
  );
};

export default PopularReviews;
