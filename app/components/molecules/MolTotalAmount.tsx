'use client';
import { useState, useEffect, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, CircularProgress } from '@mui/material';
import { TYPOGRAPHY_TEXT, totalAmountValue } from '@/app/contents';
import { listData } from '@/app/moc';
import { useDateTime } from '@/app/hooks/useDateTime';

const MolTotalAmount = () => {
  const [count, setCount] = useState(totalAmountValue);
  const [isAmountLoading, setIsAmountLoading] = useState(false);
  const getYear = useDateTime('YYYY');

  const presentAmount = useMemo(
    () =>
      listData
        .filter(
          (item) =>
            new Date(item.orderDate).getFullYear().toString() === getYear
        )
        .reduce((total, item) => total + item.amountOfMoney, 0),
    [getYear]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(totalAmountValue - presentAmount);
      setIsAmountLoading(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [presentAmount]);

  const formattedDonationAmount = count.toLocaleString('ja-JP');

  return (
    <Card sx={{ minWidth: 275 }} className={'m-10'}>
      <CardContent className={'bg-gray-100 flex items-center justify-center'}>
        {isAmountLoading ? (
          <Typography className={'text-4xl'}>
            {`${TYPOGRAPHY_TEXT.BALANCE_OF_DONATIONS} ${formattedDonationAmount} 円`}
          </Typography>
        ) : (
          <Box className=' text-center'>
            <CircularProgress />
            <Typography>読み込みしています...</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MolTotalAmount;
