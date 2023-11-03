'use client';
import { useState } from 'react';
import { useDataUpdate } from '@/app/hooks/useDataUpdate';

const Page = () => {
  const { handleAddData } = useDataUpdate();

  const [orderDate, setOrderDate] = useState('');
  const [productName, setProductName] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddButtonClick = (event: any) => {
    event.preventDefault();
    const newData = {
      orderDate,
      productName,
      address,
      amountOfMoney: parseInt(amount),
    };

    handleAddData(newData);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='lg:text-4xl text-3xl font-bold lg:mt-32 mt-10 '>
        登録画面
      </h2>
      <form className='font-bold text-lg lg:m-9 m-5'>
        <label>
          注文日
          <span className='text-white ml-2'>
            <span className='rounded-full bg-red-500 px-2'>必須</span>
          </span>
        </label>
        <input
          className='border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-xl mb-7'
          type='date'
          required
          onChange={(e) => setOrderDate(e.target.value)}
        />
        <label>
          商品名
          <span className='text-white ml-2'>
            <span className='rounded-full bg-red-500 px-2'>必須</span>
          </span>
        </label>
        <input
          className='border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-xl mb-7'
          type='text'
          placeholder='さがびより 12kg（5kg×2袋,2kg×1袋）'
          required
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>
          住所
          <span className='text-white ml-6'>
            <span className='rounded-full bg-red-500 px-2'>必須</span>
          </span>
        </label>
        <input
          className='border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-xl mb-7'
          type='text'
          placeholder='佐賀県 吉野ヶ里町'
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>
          金額
          <span className='text-white ml-6'>
            <span className='rounded-full bg-red-500 px-2'>必須</span>
          </span>
        </label>
        <input
          className='border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-xl mb-7'
          type='number'
          placeholder='10000'
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className='flex justify-center items-center'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-lg font-medium py-3 px-6 rounded-full transition duration-200 w-48'
            onSubmit={handleAddButtonClick}
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
