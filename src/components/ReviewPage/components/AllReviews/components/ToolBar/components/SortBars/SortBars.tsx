import { useState } from 'react';
import styled from 'styled-components';

import Filter from '@/components/Dropdowns/Filter';
import { SORT_ITEMS, GENRE_FILTER_ITEMS } from '@/constants/dropdown';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  & BarButton {
    width: 190px;
  }
`;

const SortBars = () => {
  // TODO make type or interface
  const filterGroup = [
    {
      name: 'sort',
      items: SORT_ITEMS,
    },
    {
      name: 'genre',
      items: GENRE_FILTER_ITEMS,
    },
  ];

  const [selected, setSelected] = useState({
    [filterGroup[0].name]: SORT_ITEMS[0],
    [filterGroup[1].name]: GENRE_FILTER_ITEMS[0],
  });

  return (
    <Container>
      {filterGroup.map((e) => (
        <Filter
          key={e.name}
          type={e.name}
          items={e.items}
          selected={selected[e.name]}
          setSelected={setSelected}
        />
      ))}
    </Container>
  );
};

export default SortBars;
