import { ReactNode, useMemo, useState } from 'react';
import { EToastType } from '@/constants/notification';
import ToastContext from './ToastContext';

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState(EToastType.SUCCESS);
  const [toastDuration, setDuration] = useState(3000);

  const value = useMemo(
    () => ({
      toastIsOpen,
      setToastIsOpen,
      toastMessage,
      setToastMessage,
      toastType,
      setToastType,
      toastDuration,
      setDuration,
    }),
    [toastIsOpen, toastMessage, toastType, toastDuration]
  );
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export default ModalProvider;
