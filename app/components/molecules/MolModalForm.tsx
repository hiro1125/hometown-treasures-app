'use client';

import React, { useState } from 'react';
import {
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useDataUpdate } from '@/app/hooks/useDataUpdate';
import { useDateTime } from '@/app/hooks/useDateTime';
import AtomCancelButton from '@/app/components/atoms/AtomCancelButton';
import { BUTTON_TEXT } from '@/app/contents';

const MolModalForm = () => {
  const { handleAddData } = useDataUpdate();
  const dateTime = useDateTime('YYYY/MM/DD');

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
    setOrderDate('');
    setProductName('');
    setAddress('');
    setAmount('');
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
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <AddTaskIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='登録' />
      </ListItemButton>
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
                type='text'
                label='注文日'
                placeholder={dateTime}
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
                minRows='0'
                required
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setAmountError(false);
                }}
                inputProps={{
                  min: 0,
                }}
                error={amountError}
                helperText={amountError ? '金額を入力してください' : ''}
                className='border rounded-lg p-2 mt-3'
              />
              <div className='flex justify-around mt-3'>
                <AtomCancelButton onClick={handleClose} />
                <Button
                  type='button'
                  className='bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-12 rounded-full'
                  onClick={handleAddButtonClick}
                >
                  {BUTTON_TEXT.REGISTRATION}
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
