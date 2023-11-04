'use client';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

const MolTotalAmount = () => {
  const [count, setCount] = useState(50000);

  return (
    <Card sx={{ minWidth: 275 }} className='m-10'>
      <CardContent className='bg-gray-100 flex items-center justify-center'>
        <Typography className='text-4xl'>
          寄付金額残高 {count.toLocaleString('ja-JP')} 円
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MolTotalAmount;
