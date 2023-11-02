import { useState } from 'react';
import { ApiListData } from '@/app/types';
import { listData as initialListData } from '@/app/moc';

export const useDataUpdate = () => {
  const [listData, setListData] = useState(initialListData);

  const handleAddData = (newData: ApiListData) => {
    setListData((prevData) => [...prevData, newData]);
  };

  return { listData, handleAddData };
};
