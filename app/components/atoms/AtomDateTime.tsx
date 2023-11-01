import React from 'react';
import { useDateTime } from '@/app/hooks/useDateTime';

const AtomDateTime = () => {
  const dateTime = useDateTime('YYYY年MM月DD日 (dddd) HH時mm分ss秒');

  return (
    <div className='flex relative items-center'>
      <div className='text-center text-4xl'>{dateTime}</div>
    </div>
  );
};

export default AtomDateTime;
