import { useEffect, useState } from 'react';

// The use example is in Comments/SortSelector
export const useToggleWhenClickOutside = (
  ref: React.RefObject<HTMLElement>,
  initialExpanded: boolean,
  excludeRefs?: React.RefObject<HTMLElement>[] | null
) => {
  const [expanded, setExpanded] = useState<boolean>(initialExpanded);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      !ref.current?.contains(e.target as Node) &&
      !excludeRefs?.some((excRef) => excRef.current?.contains(e.target as Node))
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return [expanded, setExpanded] as const;
};
