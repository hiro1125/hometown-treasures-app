import React, { FC } from 'react';
import { Button } from '@mui/material';
import { BUTTON_TEXT } from '@/app/contents';

type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

const AtomLoginButton: FC<ButtonProps> = ({ onClick, disabled }) => (
  <center>
    <Button
      type='button'
      variant='contained'
      fullWidth
      className={'bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-6'}
      onClick={onClick}
      disabled={disabled}
    >
      {BUTTON_TEXT.LOGIN}
    </Button>
  </center>
);

export default AtomLoginButton;
