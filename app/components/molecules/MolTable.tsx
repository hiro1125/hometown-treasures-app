'use client';
import { INDEX_TITLE_TEXT } from '@/app/contents';
import { useDataUpdate } from '@/app/hooks/useDataUpdate';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import moment from 'moment';
import React from 'react';

const MolTable = () => {
  const { listData } = useDataUpdate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }}>
        <TableHead>
          <TableRow>
            <TableCell>{INDEX_TITLE_TEXT.DATE}</TableCell>
            <TableCell align='left'>{INDEX_TITLE_TEXT.PRODUCT}</TableCell>
            <TableCell align='center'>{INDEX_TITLE_TEXT.DOMICILE}</TableCell>
            <TableCell align='center'>
              {INDEX_TITLE_TEXT.AMOUNT_OF_MONEY}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map((item, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {moment(item.orderDate).format('YYYY年M月D日')}
              </TableCell>
              <TableCell align='left'>{item.productName}</TableCell>
              <TableCell align='center'>{item.address}</TableCell>
              <TableCell align='center'>
                {item.amountOfMoney.toLocaleString('ja-JP')}円
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MolTable;
