import { useEffect, useState } from 'react';
import moment from 'moment';

/** サーバーから時間のAPIを常に取得 */
const URL = 'https://worldtimeapi.org/api/timezone/Asia/Tokyo';

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

export const fetchServerTime = async () => {
  try {
    const response = await fetch(URL);

    /** 時間などの情報をJSON形式で取得 */
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const useMoment = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const fetchAndSetTime = async () => {
      try {
        const serverTime = await fetchServerTime();

        if (serverTime) {
          const date = moment(serverTime.dateTime);
          setDateTime(date.format('YYYY年MM月DD日 (dddd) HH時mm分ss秒'));
        }
      } catch (error) {
        throw error;
      }
    };
    fetchAndSetTime();
    const interval = setInterval(fetchAndSetTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return dateTime;
};
