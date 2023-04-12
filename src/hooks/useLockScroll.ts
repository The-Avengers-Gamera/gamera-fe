import { useEffect } from 'react';

const useLockScroll = () => {
  useEffect(() => {
    document.body.classList.add('lock-scroll');

    return () => {
      document.body.classList.remove('lock-scroll');
    };
  }, []);
};

export default useLockScroll;
