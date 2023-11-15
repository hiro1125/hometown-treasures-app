import React, { FC } from 'react';
import { Button } from '@mui/material';

type ButtonProps = {
  onClick: () => void;
};

const AtomLoginButton: FC<ButtonProps> = ({ onClick }) => (
  <center>
    <Button
      type='button'
      variant='contained'
      fullWidth
      className={'bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-6'}
      onClick={onClick}
    >
      ログイン
    </Button>
  </center>
);

export default AtomLoginButton;
