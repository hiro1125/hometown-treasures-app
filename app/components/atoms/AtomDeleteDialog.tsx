import React, { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AtomCancelButton from '@/app/components/atoms/AtomCancelButton';
import { BUTTON_TEXT } from '@/app/contents';

type ButtonProps = {
  onClick: () => void;
};

const AtomDeleteDialog: FC<ButtonProps> = ({ onClick }) => {
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
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          確認
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText className=' text-center'>
            本当に削除しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions className='p-5'>
          <AtomCancelButton onClick={handleClose} />
          <Button
            type='button'
            className='bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-12 rounded-full'
            onClick={onClick}
          >
            {BUTTON_TEXT.OK}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AtomDeleteDialog;
