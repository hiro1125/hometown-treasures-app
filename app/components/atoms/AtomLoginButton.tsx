import React from 'react';
import { Button } from '@mui/material';

const AtomLoginButton = () => (
  <center>
    <Button
      type='button'
      variant='contained'
      fullWidth
      className={'bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-6'}
    >
      ログイン
    </Button>
  </center>
);

export default AtomLoginButton;
