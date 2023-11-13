import React from 'react';
import { Typography } from '@mui/material';
import { useDateTime } from '@/app/hooks/useDateTime';

const AtomDateTime = () => {
  const dateTime = useDateTime('YYYY年MM月DD日 (dddd) HH時mm分ss秒');

  return (
    <Typography
      variant='h4'
      noWrap
      component='div'
      align='center'
      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
      {dateTime}
    </Typography>
  );
};

export default AtomDateTime;
