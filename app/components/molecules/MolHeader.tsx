'use client';
import { useMoment } from '@/app/hooks/useMoment';
import React from 'react';

const MolHeader = () => {
  const time = useMoment();
  return (
    /** 日付 */
    <div className='bg-red-100 h-20 flex items-center justify-center'>
      <div className='text-center text-4xl'>{time}</div>
    </div>
  );
};

export default MolHeader;
