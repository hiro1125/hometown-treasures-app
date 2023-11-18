import React, { FC } from 'react';
import { Button } from '@mui/material';
import { BUTTON_TEXT } from '@/app/contents';

type ButtonProps = {
  onClick: () => void;
};

const AtomCancelButton: FC<ButtonProps> = ({ onClick }) => (
  <Button
    className={
      'bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 px-6 rounded-full'
    }
    onClick={onClick}
  >
    {BUTTON_TEXT.CANCEL}
  </Button>
);

export default AtomCancelButton;
