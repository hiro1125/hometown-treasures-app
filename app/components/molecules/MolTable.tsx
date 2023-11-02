'use client';
import React from 'react';
import { INDEX_TITLE_TEXT } from '@/app/contents';
import { useDataUpdate } from '@/app/hooks/useDataUpdate';

const MolTable = () => {
  const { listData } = useDataUpdate();

  return (
    <div className='p-6'>
      <table className='w-full border-2'>
        <tbody>
          <tr>
            <th className='border-2 p-4 border-black text-4xl '>
              {INDEX_TITLE_TEXT.DATE}
            </th>
            <th className='border-2 p-3 border-black text-4xl'>
              {INDEX_TITLE_TEXT.PRODUCT}
            </th>
            <th className='border-2 p-3 border-black text-4xl'>
              {INDEX_TITLE_TEXT.DOMICILE}
            </th>
            <th className='border-2 p-3 border-black text-4xl'>
              {INDEX_TITLE_TEXT.AMOUNT_OF_MONEY}
            </th>
          </tr>
          {listData.map((item, index) => (
            <tr key={index} className='border-2 h-24 text-xl'>
              <td className='border-2 p-2 text-center border-black'>
                {item.orderDate}
              </td>
              <td className='border-2 p-2 border-black'>{item.productName}</td>
              <td className='border-2 p-2 text-center border-black'>
                {item.address}
              </td>
              <td className='border-2 p-2 text-center border-black'>
                {item.amountOfMoney.toLocaleString('ja-JP')}円
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MolTable;
