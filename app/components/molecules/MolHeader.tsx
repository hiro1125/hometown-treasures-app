'use client';
import React from 'react';
import AtomAddition from '@/app/components/atoms/AtomAddition';
import AtomDateTime from '@/app/components/atoms/AtomDateTime';
import AtomsSearch from '@/app/components/atoms/AtomsSearch';

const MolHeader = () => (
  <div className='bg-slate-200 h-20 flex items-center justify-center gap-10'>
    <AtomDateTime />
    <AtomsSearch />
    <AtomAddition />
  </div>
);

export default MolHeader;
