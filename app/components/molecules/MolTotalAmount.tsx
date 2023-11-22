'use client';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { TYPOGRAPHY_TEXT, totalAmountValue } from '@/app/contents';
import { listData } from '@/app/moc';
import { useDateTime } from '@/app/hooks/useDateTime';

const MolTotalAmount = () => {
  const [count, setCount] = useState(totalAmountValue);
  const getYear = useDateTime('YYYY');

  useEffect(() => {
    const presentAmount = listData
      .filter(
        (item) => new Date(item.orderDate).getFullYear().toString() === getYear
      )
      .reduce((total, item) => total + item.amountOfMoney, 0);

    setCount(totalAmountValue - presentAmount);
  }, [getYear]);

  const formattedDonationAmount = count.toLocaleString('ja-JP');

  return (
    <Card sx={{ minWidth: 275 }} className={'m-10'}>
      <CardContent className={'bg-gray-100 flex items-center justify-center'}>
        <Typography className={'text-4xl'}>
          {`${TYPOGRAPHY_TEXT.BALANCE_OF_DONATIONS} ${formattedDonationAmount} 円`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MolTotalAmount;
