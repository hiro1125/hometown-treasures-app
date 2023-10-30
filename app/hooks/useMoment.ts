'use client';
import { useEffect, useState } from 'react';
import moment from 'moment';

export const useMoment = () => {
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

  const [dateTime, setDateTime] = useState(
    moment().format('YYYY[年]MM[月]DD[日] (dddd) HH時mm分ss秒')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(moment().format('YYYY[年]MM[月]DD[日] (dddd) HH時mm分ss秒'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return dateTime;
};
