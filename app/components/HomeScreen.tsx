import MolHeader from '@/app/components/molecules/MolHeader';
import MolTable from '@/app/components/molecules/MolTable';
import MolTotalAmount from '@/app/components/molecules/MolTotalAmount';
import React from 'react';

const HomeScreen = () => (
  <div>
    <MolHeader />
    <MolTotalAmount />
    <MolTable />
  </div>
);

export default HomeScreen;
