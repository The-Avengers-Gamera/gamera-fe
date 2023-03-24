import { createContext } from 'react';
import { EToastType } from '@/constants/notification';

interface ToastContextType {
  toastIsOpen: boolean;
  setToastIsOpen(open: boolean): void;
  toastMessage: string;
  setToastMessage(message: string): void;
  toastType: EToastType;
  setToastType(type: EToastType): void;
  toastDuration: number;
  setDuration(duration: number): void;
}

const ToastContext = createContext<ToastContextType>({
  toastIsOpen: false,
  setToastIsOpen: () => {},
  toastMessage: '',
  setToastMessage: () => {},
  toastType: EToastType.SUCCESS,
  setToastType: () => {},
  toastDuration: 3000,
  setDuration: () => {},
});

export default ToastContext;
