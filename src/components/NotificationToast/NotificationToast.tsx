import React from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import DangerousIcon from '@mui/icons-material/Dangerous';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import useToast from '@/context/notificationToast';
import { ToastType } from '../../constants/notification';

const Container = styled.div`
  // if the prop toastIsOpen is true, then the container is shown
  opacity: ${({ toastIsOpen }) => (toastIsOpen ? 1 : 0)};

  // set the transition time to 0.2s
  transition: opacity 0.2s;
  position: absolute;
  min-height: 75px;
  min-width: 400px;
  max-width: 600px;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #272a35;
  z-index: 999;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 20px;
  padding-right: 40px;

  .notification-icon {
    color: ${({ toastType }: { toastType: ToastType }) => {
      switch (toastType) {
        case ToastType.SUCCESS:
          return '#6DDB03';
        case ToastType.ERROR:
          return '#DE4344';
        case ToastType.WARNING:
          return '#DE4344';
        case ToastType.INFO:
          return '#D8D8D8';
        default:
          return '#00b894';
      }
    }};
    font-size: 40px;
    margin-right: 20px;
  }

  .notification-text {
    color: #f4f4f4;
    font-size: 18px;
  }

  .close-btn {
    position: absolute;
    right: 10px;
    top: 5px;
    background-color: transparent;
    border: 0;
    font-size: 12px;
    color: #f4f4f4;
    cursor: pointer;
  }
`;

const NotificationToast = () => {
  const { toastIsOpen, setToastIsOpen, toastContent } = useToast();
  const { type, message, duration } = toastContent;

  // When the toast is open, set a timeout to close it after the specified duration
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (toastIsOpen) {
      timeout = setTimeout(() => {
        setToastIsOpen(false);
      }, duration);
    } else {
      // if the toast is closed, clear the timeout
      clearTimeout(timeout);
    }
  }, [setToastIsOpen, duration, toastIsOpen]);

  return (
    <Container
      toastIsOpen={toastIsOpen}
      toastType={type}
    >
      <button
        type="button"
        className="close-btn"
        onClick={() => {
          setToastIsOpen(false);
        }}
      >
        <CloseIcon />
      </button>
      {type === ToastType.SUCCESS && <CheckCircleIcon className="notification-icon" />}
      {type === ToastType.ERROR && <DangerousIcon className="notification-icon" />}
      {type === ToastType.WARNING && <WarningIcon className="notification-icon" />}
      {type === ToastType.INFO && <InfoIcon className="notification-icon" />}
      <span className="notification-text">{message}</span>
    </Container>
  );
};

export default NotificationToast;
