'use client';

import React, { useState } from 'react';
import { Box, IconButton, Toolbar } from '@mui/material';
import { AppBar } from '@/app/style';
import MenuIcon from '@mui/icons-material/Menu';
import AtomDateTime from '@/app/components/atoms/AtomDateTime';
import AtomsSearch from '@/app/components/atoms/AtomsSearch';
import MolDrawer from '@/app/components/molecules/MolDrawer';

const MolHeader = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <AtomDateTime />
          <AtomsSearch />
        </Toolbar>
      </AppBar>
      <MolDrawer
        open={open}
        setOpen={setOpen}
        onClose={handleDrawerClose}
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
};

export default MolHeader;
