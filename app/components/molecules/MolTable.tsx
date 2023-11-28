'use client';
import React, { useState } from 'react';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useDataUpdate } from '@/app/hooks/useDataUpdate';
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  jaJP,
} from '@mui/x-data-grid';
import { ApiListData } from '@/app/types';
import { CustomDataGrid, GridContainer } from '@/app/style';

const MolTable = () => {
  const { listData } = useDataUpdate();
  const [rows, setRows] = useState<ApiListData[]>(listData);

  const columns: GridColDef[] = [
    {
      field: 'orderDate',
      headerName: '注文日',
      headerClassName: 'header-color',
      type: 'date',
      editable: true,
      minWidth: 150,
      flex: 0.3,
      valueGetter: (params) => {
        const dateString = params.value;
        const date = moment(dateString, 'YYYY/MM/DD').toDate();
        return date;
      },
      /** 'YYYY年M月D日'の形式で返す */
      valueFormatter: (params) => {
        const formatDate = params.value;
        return moment(formatDate).format('YYYY年M月D日');
      },
    },
    {
      field: 'productName',
      headerName: '商品名',
      editable: true,
      minWidth: 150,
      flex: 1,
    },
    {
      field: 'address',
      headerName: '住所',
      editable: true,
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'amountOfMoney',
      type: 'number',
      headerName: '金額',
      editable: true,
      align: 'left',
      headerAlign: 'left',
      valueFormatter: (params) => `${params.value.toLocaleString('ja-JP')} 円`,
      minWidth: 150,
      flex: 0.2,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: '操作',
      cellClassName: 'actions',
      minWidth: 150,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={params.id}
          icon={<EditIcon />}
          label='Edit'
          className='textPrimary'
          color='inherit'
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<DeleteIcon />}
          label='Delete'
          color='inherit'
        />,
      ],
    },
  ];

  return (
    <GridContainer>
      <CustomDataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderRadius: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
            cursor: 'pointer',
          },
        }}
        rows={rows}
        columns={columns}
        editMode='row'
        autoHeight
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        hideFooter
      />
    </GridContainer>
  );
};

export default MolTable;
