'use client';

import React, { useState } from 'react';
import { Box, Divider, Drawer, IconButton, List, Toolbar } from '@mui/material';
import { AppBar, DrawerHeader } from '@/app/style';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AtomDateTime from '@/app/components/atoms/AtomDateTime';
import AtomsSearch from '@/app/components/atoms/AtomsSearch';
import MolModalForm from '@/app/components/molecules/MolModalForm';

const drawerWidth = 240;

const MolHeader = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          <Divider />
          <MolModalForm />
          <Divider />
        </List>
      </Drawer>
    </Box>
  );
};

export default MolHeader;
