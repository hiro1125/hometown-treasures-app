import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

type EmailProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AtomEmailInput: FC<EmailProps> = ({ onChange }) => (
  <TextField
    label='メールアドレス'
    variant='outlined'
    fullWidth
    onChange={onChange}
    InputProps={{
      startAdornment: (
        <AccountCircle style={{ color: 'gray' }} className='mr-4' />
      ),
    }}
  />
);

export default AtomEmailInput;
