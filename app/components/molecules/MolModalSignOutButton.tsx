import React, { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Box,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from '@mui/material';
import { auth } from '@/app/firebase';
import AtomCancelButton from '@/app/components/atoms/AtomCancelButton';

const MolModalSignOutButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary='サインアウト' />
      </ListItemButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box
          className={
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-3 lg:border-0 p-4 text-center rounded-lg w-80'
          }
        >
          <Box className={'justify-center items-center text-center'}>
            <Typography className='mb-5' variant='h6' gutterBottom>
              本当にサインアウトしますか？
            </Typography>
            <AtomCancelButton onClick={handleClose} />
            <Button
              className={
                'bg-blue-400 hover:bg-blue-500 text-white text-lg py-3 px-12 rounded-full'
              }
              onClick={() => auth.signOut()}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MolModalSignOutButton;
