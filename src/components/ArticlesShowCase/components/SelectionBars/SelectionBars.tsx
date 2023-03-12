import styled from 'styled-components';
import PlatformBars from './components/PlatformBars';
import SortBars from '../../../Shares/SortBars';
import { EArticleType } from '@/constants/article';

const Container = styled.div`
  // border: 1px solid #fff;

  margin-top: 45px;

  display: flex;
  justify-content: space-between;
`;

type SelectionBarsProps = {
  articleType: EArticleType;
  platformSelected: Platform;
  setPlatformSelected: React.Dispatch<React.SetStateAction<Platform>>;
};

const SelectionBars = ({
  articleType,
  platformSelected,
  setPlatformSelected,
}: SelectionBarsProps) => {
  return (
    <Container>
      <PlatformBars
        platformSelected={platformSelected}
        setPlatformSelected={setPlatformSelected}
      />
      {/* SortBars are only visible on Review page */}
      {articleType === EArticleType.REVIEW ? <SortBars /> : null}
    </Container>
  );
};

export default SelectionBars;
