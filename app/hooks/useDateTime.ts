import { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchServerTime } from '@/app/api';

moment.updateLocale('ja', {
  weekdays: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
  ],
});

export const useDateTime = (formatOption: string) => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const fetchAndSetTime = async () => {
      try {
        const serverTime = await fetchServerTime();

        if (serverTime) {
          const date = moment(serverTime.dateTime);
          setDateTime(date.format(formatOption));
        }
      } catch (error) {
        throw error;
      }
    };
    fetchAndSetTime();
    const interval = setInterval(fetchAndSetTime, 1000);
    return () => clearInterval(interval);
  }, [formatOption]);
  return dateTime;
};
