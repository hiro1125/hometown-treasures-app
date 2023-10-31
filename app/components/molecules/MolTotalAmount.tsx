'use client';
import { useState } from 'react';

const MolTotalAmount = () => {
  const [count, setCount] = useState();

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-violet-100 w-1/3 h-20 m-10 flex items-center justify-center'>
        <p className='text-4xl'>寄付金額残高 {count} 円</p>
      </div>
    </div>
  );
};

export default MolTotalAmount;
