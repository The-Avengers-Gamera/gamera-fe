import { EToastType } from '@/constants/notification';

export interface INotificationToastContent {
  type: EToastType;
  message: string;
  duration?: number;
}
