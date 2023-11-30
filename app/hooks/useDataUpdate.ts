import { useState } from 'react';
import { listData as initialListData } from '@/app/moc';

export const useDataUpdate = () => {
  const [listData, setListData] = useState(initialListData);

  const handleAddData = (newData: any) => {
    setListData((prevData) => [...prevData, newData]);
  };

  return { listData, handleAddData };
};
