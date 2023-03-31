import parse from 'html-react-parser';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  margin-bottom: 15px;
  p {
    font-size: 20px;
  }

  img {
    width: 110%;
    margin-bottom: 35px;
    border-radius: 6px;
  }
`;

interface Props {
  mainContent: string;
}

const ArticleMainContent = ({ mainContent }: Props) => {
  return <Container>{parse(mainContent)}</Container>;
};

export default ArticleMainContent;
