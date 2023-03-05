import { ReactNode, useMemo, useState } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [displayLogInPopWindow, setDisplayLogInPopWindow] = useState(true);

  const changeModalToOpen = (show: boolean) => {
    setModalIsOpen(show);
  };

  const changeDisplayLogInPopWindow = (status: boolean) => {
    setDisplayLogInPopWindow(status);
  };

  const value = useMemo(
    () => ({
      modalIsOpen,
      setModalIsOpen,
      displayLogInPopWindow,
      changeModalToOpen,
      changeDisplayLogInPopWindow,
    }),
    [modalIsOpen, displayLogInPopWindow]
  );
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
export default ModalProvider;
