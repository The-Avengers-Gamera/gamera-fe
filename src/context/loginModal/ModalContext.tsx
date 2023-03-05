import { createContext } from 'react';

interface ModalContextType {
  modalIsOpen: boolean;
  setModalIsOpen(open: boolean): void;
  displayLogInPopWindow: boolean;
  changeModalToOpen: (show: boolean) => void;
  changeDisplayLogInPopWindow: (status: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  modalIsOpen: false,
  setModalIsOpen: () => {},
  displayLogInPopWindow: false,
  changeModalToOpen: () => {},
  changeDisplayLogInPopWindow: () => {},
});

export default ModalContext;
