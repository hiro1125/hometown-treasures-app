import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { auth } from '@/app/firebase';

const AtomSignOutButton = () => (
  <ListItemButton onClick={() => auth.signOut()}>
    <ListItemIcon>
      <LogoutIcon />
    </ListItemIcon>
    <ListItemText primary='サインアウト' />
  </ListItemButton>
);

export default AtomSignOutButton;
