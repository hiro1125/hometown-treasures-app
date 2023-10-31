'use client';
import React from 'react';
import { useDateTime } from '@/app/hooks/useDateTime';
import { IoMdSearch, IoIosAddCircleOutline } from 'react-icons/io';

const MolHeader = () => {
  const dateTime = useDateTime();
  return (
    <div className='bg-red-100 h-20 flex items-center justify-center gap-10'>
      <div className='flex relative items-center'>
        <div className='text-center text-4xl'>{dateTime}</div>
      </div>
      <div className='left-2 flex items-center justify-center'>
        <IoMdSearch size={50} />
      </div>
      <div className='left-2 flex items-center justify-center'>
        <IoIosAddCircleOutline size={50} />
      </div>
    </div>
  );
};

export default MolHeader;
