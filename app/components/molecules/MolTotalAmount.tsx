'use client';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { TYPOGRAPHY_TEXT } from '@/app/contents';

const MolTotalAmount = () => {
  const [count, setCount] = useState(50000);

  return (
    <Card sx={{ minWidth: 275 }} className={'m-10'}>
      <CardContent className={'bg-gray-100 flex items-center justify-center'}>
        <Typography className={'text-4xl'}>
          {TYPOGRAPHY_TEXT.BALANCE_OF_DONATIONS}
          {count.toLocaleString('ja-JP')} 円
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MolTotalAmount;
