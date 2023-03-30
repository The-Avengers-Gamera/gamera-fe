import styled from 'styled-components';
import Filter from '@/components/Dropdowns/Filter';
import { SortBarDate, SortBarGenre } from '@/constants/dropdown';
import { ReviewOrder, ReviewSort } from '@/constants/article';
import { SearchGenre } from '@/interfaces/search';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  & BarButton {
    width: 190px;
  }
`;

export type SortType = 'sort' | 'genre';
export type SortItem = SortBarDate | SortBarGenre;
interface SortBarsProps {
  sort?: ReviewSort;
  order?: ReviewOrder;
  genre: SearchGenre;
  onSortChange: (type: SortType, sort: SortBarDate | SortBarGenre) => void;
}

const SortBars = ({ sort, order, genre, onSortChange }: SortBarsProps) => {
  type SortBar = {
    type: SortType;
    items: SortItem[];
    selected: SortItem;
  };

  const genreSelected = Object.keys(SortBarGenre)[
    Object.values(SortBarGenre).indexOf(
      (genre.charAt(0).toUpperCase() + genre.slice(1)) as SortBarGenre
    )
  ] as SortBarGenre;

  const getSelectedFromSort = () => {
    let item = SortBarDate.Latest;
    if (sort === ReviewSort.CREATED_TIME && order === ReviewOrder.DESC) {
      item = SortBarDate.Latest;
    }
    if (sort === ReviewSort.CREATED_TIME && order === ReviewOrder.ASC) {
      item = SortBarDate.Oldest;
    }

    // TODO: temporarily disable this sort option, waiting for backend to implement
    // if (sort === ReviewSort.SCORES) {
    //   item = SortBarDate.Score;
    // }
    if (sort === ReviewSort.TITLE) {
      item = SortBarDate.Title;
    }
    return item;
  };

  const sortSelected = getSelectedFromSort();

  const SortGroup: SortBar[] = [
    {
      type: 'sort',
      items: Object.values(SortBarDate),
      selected: sortSelected,
    },
    {
      type: 'genre',
      items: Object.values(SortBarGenre),
      selected: genreSelected,
    },
  ];

  const handleSelectChange = (type: SortType, item: SortItem) => {
    onSortChange(type, item);
  };

  return (
    <Container>
      {SortGroup.map((e) => (
        <Filter
          key={e.type}
          type={e.type}
          items={e.items}
          selected={e.selected}
          onSelectChange={handleSelectChange}
        />
      ))}
    </Container>
  );
};

export default SortBars;
