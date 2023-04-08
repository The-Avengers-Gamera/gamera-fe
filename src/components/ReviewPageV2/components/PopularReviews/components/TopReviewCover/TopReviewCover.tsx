import styled from 'styled-components';

const Container = styled.div`
  max-width: 755px;
  height: 390px;
  border-radius: 25px;
  padding: 20px;

  & img {
    object-fit: cover;
    border-radius: 25px;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    padding-right: 100px;
    width: 500px;
    height: 300px;
  }
  @media screen and (max-width: 568px) {
    width: 450px;
    height: 250px;
  }
`;

interface TopReviewCoverProps {
  coverImgUrl: string;
}

const TopReviewCover = ({ coverImgUrl }: TopReviewCoverProps) => (
  <Container>
    <img
      src={coverImgUrl}
      alt="popular review cover"
    />
  </Container>
);

export default TopReviewCover;
