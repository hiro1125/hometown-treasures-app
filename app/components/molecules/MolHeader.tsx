'use client';
import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import AtomAddition from '@/app/components/atoms/AtomAddition';
import AtomDateTime from '@/app/components/atoms/AtomDateTime';
import AtomsSearch from '@/app/components/atoms/AtomsSearch';

const MolHeader = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar className='static flex items-center justify-center gap-10'>
      <Toolbar>
        <AtomDateTime />
        <AtomsSearch />
        <AtomAddition />
      </Toolbar>
    </AppBar>
  </Box>
);

export default MolHeader;
