import styled from 'styled-components';
import Container from '@mui/material/Container';
import Post from '@/components/Post';

const Div = styled.div`
  padding-top: 1rem;
`;

const PostPage = () => (
  <Div>
    <Container maxWidth="lg">
      <Post />
    </Container>
  </Div>
);

export default PostPage;
