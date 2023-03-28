import styled from 'styled-components';

const Container = styled.div`
  max-width: 755px;
  height: 390px;
  border-radius: 25px;
  object-fit: cover;

  & img {
    border-radius: 25px;
    width: 100%;
    height: 100%;
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
