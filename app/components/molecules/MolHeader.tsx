'use client';
import { useMoment } from '@/app/hooks/useMoment';
import React from 'react';

const MolHeader = () => {
  const dateTime = useMoment();
  return (
    <div className='bg-red-100 h-20 flex items-center justify-center gap-10'>
      <div className='flex relative items-center'>
        <div className='text-center text-4xl'>{dateTime}</div>
      </div>
    </div>
  );
};

export default MolHeader;
