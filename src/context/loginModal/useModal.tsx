import { useContext } from 'react';
import ModalContext from './ModalContext';

export const useModal = () => useContext(ModalContext);

export default useModal;
