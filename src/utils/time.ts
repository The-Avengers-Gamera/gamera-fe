import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const nowToCreated = (createdTime: string | undefined) => {
  if (createdTime === undefined) {
    return undefined;
  }
  return dayjs().to(createdTime);
};

export const convertToYYYYMMDD = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD');
};
