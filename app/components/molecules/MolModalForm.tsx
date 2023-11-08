'use client';
import AtomAddition from '@/app/components/atoms/AtomAddition';
import { useDataUpdate } from '@/app/hooks/useDataUpdate';
import { Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';

const MolModalForm = () => {
  const { handleAddData } = useDataUpdate();

  const [open, setOpen] = useState(false);
  const [orderDate, setOrderDate] = useState('');
  const [productName, setProductName] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const [orderDateError, setOrderDateError] = useState(false);
  const [productNameError, setProductNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOrderDateError(false);
    setProductNameError(false);
    setAddressError(false);
    setAmountError(false);
  };

  const handleAddButtonClick = () => {
    if (orderDate && productName && address && amount) {
      const newData = {
        orderDate,
        productName,
        address,
        amountOfMoney: parseInt(amount),
      };
      handleAddData(newData);
      handleClose();
    } else {
      setOrderDateError(!orderDate);
      setProductNameError(!productName);
      setAddressError(!address);
      setAmountError(!amount);
    }
  };

  return (
    <>
      <Button className='text-white' onClick={handleOpen}>
        <AtomAddition />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          onClick={handleClose}
          className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative p-4 mx-auto max-w-sm rounded-lg bg-white'
          >
            <h2 className='text-3xl font-bold mb-6 text-center'>登録画面</h2>
            <div className='flex items-center mb-2'>
              <span className='rounded-full px-2 text-red-500'>*</span>
              <span className='text-sm'>
                注文日・商品名・住所・金額を入力してください。
              </span>
            </div>
            <form className='mt-4'>
              <TextField
                type='date'
                required
                id='outlined-required'
                value={orderDate}
                onChange={(e) => {
                  setOrderDate(e.target.value);
                  setOrderDateError(false);
                }}
                error={orderDateError}
                helperText={orderDateError ? '注文日を入力してください' : ''}
                className='border rounded-lg p-2 mt-3'
              />

              <TextField
                type='text'
                label='商品名'
                placeholder='例）さがびより 12kg（5kg×2袋,2kg×1袋）'
                required
                fullWidth
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                  setProductNameError(false);
                }}
                error={productNameError}
                helperText={productNameError ? '商品名を入力してください' : ''}
                className='border rounded-lg p-2 mt-3'
              />

              <TextField
                type='text'
                label='住所'
                required
                placeholder='例）佐賀県 吉野ヶ里町'
                fullWidth
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setAddressError(false);
                }}
                error={addressError}
                helperText={addressError ? '住所を入力してください' : ''}
                className='border rounded-lg p-2 mt-3'
              />

              <TextField
                type='number'
                label='金額'
                placeholder='例）10000'
                required
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setAmountError(false);
                }}
                error={amountError}
                helperText={amountError ? '金額を入力してください' : ''}
                className='border rounded-lg p-2 mt-3'
              />
              <div className='flex justify-around mt-3'>
                <Button
                  type='button'
                  className='bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-6 rounded-full'
                  onClick={handleClose}
                >
                  キャンセル
                </Button>
                <Button
                  type='button'
                  className='bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-12 rounded-full'
                  onClick={handleAddButtonClick}
                >
                  登録
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MolModalForm;
