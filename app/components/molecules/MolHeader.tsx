'use client';
import { useDateTime } from '@/app/hooks/useDateTime';
import React from 'react';

const MolHeader = () => {
  const dateTime = useDateTime();
  return (
    <div className='bg-red-100 h-20 flex items-center justify-center gap-10'>
      <div className='flex relative items-center'>
        <div className='text-center text-4xl'>{dateTime}</div>
      </div>
    </div>
  );
};

export default MolHeader;
