import { createContext } from 'react';
import { EToastType } from '@/constants/notification';
import { INotificationToastContent } from '@/interfaces/notifacationToast';

interface ToastContextType {
  toastIsOpen: boolean;
  setToastIsOpen(open: boolean): void;
  toastContent: INotificationToastContent;
  setToastContent(content: INotificationToastContent): void;
}

const ToastContext = createContext<ToastContextType>({
  toastIsOpen: false,
  setToastIsOpen: () => {},
  toastContent: {
    message: '',
    type: EToastType.SUCCESS,
    duration: 3000,
  },
  setToastContent: () => {},
});

export default ToastContext;
