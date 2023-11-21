import React, { FC } from 'react';
import { Divider, Drawer, IconButton, List, Backdrop } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MolModalForm from '@/app/components/molecules/MolModalForm';
import MolModalSignOutButton from '@/app/components/molecules/MolModalSignOutButton';
import { DrawerHeader } from '@/app/style';

type DrawerProps = {
  open: boolean;
  setOpen: (e: boolean) => void;
  onClose: () => void;
};

const MolDrawer: FC<DrawerProps> = ({ open, setOpen, onClose }) => {
  const drawerWidth = 240;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={open}
        onClick={onClose}
      />
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
          <MolModalSignOutButton />
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default MolDrawer;
