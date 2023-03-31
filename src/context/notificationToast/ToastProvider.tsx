import { ReactNode, useMemo, useState } from 'react';
import { EToastType } from '@/constants/notification';
import ToastContext from './ToastContext';

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastContent, setToastContent] = useState({
    message: '',
    type: EToastType.SUCCESS,
    duration: 3000,
  });

  const value = useMemo(
    () => ({
      toastIsOpen,
      setToastIsOpen,
      toastContent,
      setToastContent,
    }),
    [toastIsOpen, toastContent]
  );
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export default ModalProvider;
