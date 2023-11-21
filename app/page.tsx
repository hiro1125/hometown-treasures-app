'use client';
import React from 'react';
import HomeScreen from '@/app/components/HomeScreen';
import LoginScreen from '@/app/components/LoginScreen';
import { auth } from '@/app/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, CircularProgress } from '@mui/material';

export default function Home() {
  const [user, loading] = useAuthState(auth);

  return loading ? (
    <Box className='flex justify-center items-center h-screen'>
      <CircularProgress size={60} />
    </Box>
  ) : user ? (
    <HomeScreen />
  ) : (
    <LoginScreen />
  );
}
