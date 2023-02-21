import styled from 'styled-components';

const Container = styled.div`
  width: 755px;
  height: 390px;
  object-fit: cover;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const TopReviewCover = () => {
  return (
    <Container>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIT2c9adct3gQJZDB6mP74AuNn5wCCjJL6Q&usqp=CAU"
        alt="a review cover"
      />
    </Container>
  );
};

export default TopReviewCover;
