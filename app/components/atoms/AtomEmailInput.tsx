import React from 'react';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

const AtomEmailInput = () => (
  <TextField
    label='メールアドレス'
    variant='outlined'
    fullWidth
    InputProps={{
      startAdornment: (
        <AccountCircle style={{ color: 'gray' }} className='mr-4' />
      ),
    }}
  />
);

export default AtomEmailInput;
