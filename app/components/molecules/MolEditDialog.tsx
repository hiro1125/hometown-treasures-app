import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AtomCancelButton from '@/app/components/atoms/AtomCancelButton';
import { BUTTON_TEXT } from '@/app/contents';

const MolEditDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color='inherit' onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Box className={'p-3'}>
          <DialogTitle
            className={'text-3xl font-bold text-center'}
            id='customized-dialog-title'
          >
            編集画面
          </DialogTitle>
          <TextField
            type='date'
            required
            fullWidth
            className='border rounded-lg p-2 mt-3'
          />

          <TextField
            type='text'
            label='商品名'
            required
            fullWidth
            className='border rounded-lg p-2 mt-3'
          />

          <TextField
            type='text'
            label='住所'
            required
            fullWidth
            className='border rounded-lg p-2 mt-3'
          />

          <TextField
            type='number'
            label='金額'
            required
            fullWidth
            inputProps={{
              min: 0,
            }}
            className='border rounded-lg p-2 mt-3'
          />
          <DialogActions className={'flex justify-around mt-3'}>
            <AtomCancelButton onClick={handleClose} />
            <Button
              type='button'
              className='bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-12 rounded-full'
              onClick={handleClose}
            >
              {BUTTON_TEXT.SAVE}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default MolEditDialog;
