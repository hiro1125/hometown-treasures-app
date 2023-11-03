'use client';
import React from 'react';
import moment from 'moment';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { INDEX_TITLE_TEXT } from '@/app/contents';
import { useDataUpdate } from '@/app/hooks/useDataUpdate';

const MolTable = () => {
  const { listData } = useDataUpdate();

  return (
    <Paper className={'w-full overflow-hidden'}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table>
          <TableHead className={'sticky top-0 bg-blue-200'}>
            <TableRow>
              <TableCell>{INDEX_TITLE_TEXT.DATE}</TableCell>
              <TableCell align='left'>{INDEX_TITLE_TEXT.PRODUCT}</TableCell>
              <TableCell className={'text-center'}>
                {INDEX_TITLE_TEXT.DOMICILE}
              </TableCell>
              <TableCell className={'text-center'}>
                {INDEX_TITLE_TEXT.AMOUNT_OF_MONEY}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((item, index) => (
              <TableRow key={index} className={'hover:bg-gray-100'}>
                <TableCell className='font-medium'>
                  {moment(item.orderDate).format('YYYY年M月D日')}
                </TableCell>
                <TableCell align='left'>{item.productName}</TableCell>
                <TableCell className={'text-center'}>{item.address}</TableCell>
                <TableCell className={'text-center'}>
                  {item.amountOfMoney.toLocaleString('ja-JP')}円
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MolTable;
