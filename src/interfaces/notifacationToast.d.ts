import { ToastType } from '@/constants/notification';

export interface INotificationToastContent {
  type: ToastType;
  message: string;
  duration?: number;
}
